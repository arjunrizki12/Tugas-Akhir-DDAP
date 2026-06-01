// FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyBQAZbo0ZMVY35R0q1uoG9TTCyB0Dd1rZ0",
  authDomain: "arjun-af668.firebaseapp.com",
  projectId: "arjun-af668",
  storageBucket: "arjun-af668.firebasestorage.app",
  messagingSenderId: "1060384952907",
  appId: "1:1060384952907:web:3ad0d39adac3c80338f3ce"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

async function saveUserPlaceToFirebase(place) {
  try {
    const placeToSave = { ...place };
    if (placeToSave.img && placeToSave.img.startsWith('data:') && placeToSave.img.length > 500000) {
      placeToSave.img = '';
    }
    await db.collection('places').doc(String(place.id)).set(placeToSave);
  } catch (e) {
    console.warn('Gagal simpan tempat ke Firebase:', e);
  }
}

async function deleteUserPlaceFromFirebase(id) {
  try {
    await db.collection('places').doc(String(id)).delete();
    await db.collection('reviews').doc(String(id)).delete();
  } catch (e) {
    console.warn('Gagal hapus tempat dari Firebase:', e);
  }
}

async function loadUserPlacesFromFirebase() {
  try {
    const snapshot = await db.collection('places').get();
    return snapshot.docs.map(doc => doc.data());
  } catch (e) {
    console.warn('Gagal muat tempat dari Firebase:', e);
    return [];
  }
}

async function saveReviewsToFirebase(placeId, reviewsArray) {
  try {
    await db.collection('reviews').doc(String(placeId)).set({
      list: reviewsArray
    });
  } catch (e) {
    console.warn('Gagal simpan ulasan ke Firebase:', e);
  }
}

async function loadReviewsFromFirebase(placeId) {
  try {
    const doc = await db.collection('reviews').doc(String(placeId)).get();
    if (doc.exists) return doc.data().list || [];
    return [];
  } catch (e) {
    console.warn('Gagal muat ulasan dari Firebase:', e);
    return [];
  }
}

async function loadAllReviewsFromFirebase() {
  try {
    const snapshot = await db.collection('reviews').get();
    const result = {};
    snapshot.docs.forEach(doc => {
      result[doc.id] = doc.data().list || [];
    });
    return result;
  } catch (e) {
    console.warn('Gagal muat semua ulasan dari Firebase:', e);
    return {};
  }
}

function listenToPlaces(callback) {
  db.collection('places').onSnapshot(snapshot => {
    const places = snapshot.docs.map(doc => doc.data());
    callback(places);
  }, e => {
    console.warn('Listener places error:', e);
  });
}

function listenToReviews(placeId, callback) {
  db.collection('reviews').doc(String(placeId)).onSnapshot(doc => {
    if (doc.exists) {
      callback(doc.data().list || []);
    } else {
      callback([]);
    }
  }, e => {
    console.warn('Listener reviews error:', e);
  });
}
