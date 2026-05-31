// ==================== DATA TEMPAT ====================
const PLACES_BASE = [
  {
    id:1, name:"UB Coffee - Coffee & Eatery",
    loc:"Ketawanggede, Lowokwaru, Malang",
    address:"Jl. MT. Haryono No.169, Ketawanggede, Lowokwaru, Kota Malang",
    rating:4.8, type:"Café",
    tags:["High-speed WiFi","AC","Power Outlet"],
    desc:"UB Coffee adalah destinasi belajar favorit di area kampus Brawijaya. Berlokasi strategis di Jl. MT. Haryono, kafe ini menawarkan suasana cozy dengan koneksi internet stabil. Cocok untuk ngerjain tugas sambil menikmati kopi berkualitas dan menu eatery yang variatif.",
    facilities:[
      {icon:"📶",name:"High-speed WiFi"},{icon:"❄️",name:"Full AC"},{icon:"🔌",name:"Power Outlet"},
      {icon:"☕",name:"Coffee & Eatery"},{icon:"🪑",name:"Kursi Nyaman"},{icon:"🌙",name:"Buka Malam"}
    ],
    schedule:[
      {day:"Senin - Jumat",time:"07:00 - 22:00",closed:false},
      {day:"Sabtu",time:"09:00 - 22:00",closed:false},
      {day:"Minggu",time:"07:00 - 22:00",closed:false}
    ],
    tip:'"Datang weekday pagi untuk suasana paling tenang. Meja di dekat jendela selalu jadi rebutan!"',
    coords:"-7.9475961519303775, 112.61323984232841",
    img: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGH0FyyZAHQTRaLi_Z1-4R9ajWskH5gd2hW3gOi8Wt0kSL1JIyExXkkrxR7mBKvTav9m6EKM_VtUYF-Zy3PVxkg7jJxFSkiYLY7JXvtWRvQTbpZaSGIj35Vc1syFHNKkXymFD6hTQ=w408-h272-k-no",
    bg:"linear-gradient(135deg,#2d6a4f 0%,#52b788 100%)"
  },
  {
    id:2, name:"Semusim Cafe",
    loc:"Ketawanggede, Lowokwaru, Malang",
    address:"Jl. MT. Haryono No.110, Ketawanggede, Lowokwaru, Kota Malang",
    rating:4.7, type:"Café",
    tags:["High-Speed WiFi","Air Conditioned","Quiet Zone"],
    desc:"Semusim Cafe menghadirkan konsep kafe estetik dengan nuansa musim yang berubah-ubah. Dekorasi interior yang menarik menciptakan suasana belajar yang menyenangkan dan instagrammable. Pilihan menu minuman dan makanan ringan cukup lengkap untuk menemani sesi belajar panjang.",
    facilities:[
      {icon:"📶",name:"WiFi Gratis"},{icon:"❄️",name:"Full AC"},{icon:"🔇",name:"Quiet Zone"},
      {icon:"☕",name:"Specialty Coffee"},{icon:"📸",name:"Spot Foto"},{icon:"🌿",name:"Nuansa Alam"}
    ],
    schedule:[
      {day:"Senin - Minggu",time:"10:00 - 02:00",closed:false},
    ],
    tip:'"Coba menu seasonal mereka yang selalu berubah tiap bulan. Tersedia pojok belajar yang lebih sepi di lantai atas."',
    coords:"-7.947013900135113, 112.61345975767158",
    img: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAE00Uc4h1cMlWhRnVlcJ3zps7REBFtqfVv3ImAcqPWiyGxym9WFjFwC-tWDPGjvmRoZBGotoxg3dJp-BLMbdOPprSZvsNAKHeH9iBW67eSdoo1h6RHq0qzLTuJ3-8q2-II24JM=w408-h272-k-no",
    bg:"linear-gradient(135deg,#74512D 0%,#c8956c 100%)"
  },
  {
    id:3, name:"Perpustakaan UB",
    loc:"Ketawanggede, Lowokwaru, Malang",
    address:"Gedung Perpustakaan, Jl. Veteran, Ketawanggede, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145",
    rating:4.6, type:"Café",
    tags:["High-speed WiFi","Air Conditioned","Quiet Zone"],
    desc:"Perpustakaan Universitas Brawijaya merupakan tempat belajar nyaman dengan koleksi buku lengkap, suasana tenang, dan fasilitas pendukung akademik yang modern.",
    facilities:[
      {icon:"📶",name:"WiFi Stabil"},{icon:"❄️",name:"Full AC"},{icon:"🪑",name:"Kursi Nyaman"},
      {icon:"🚪",name:"Kumpul Bareng"},{icon:"🍪",name:"Bawa Camilan"},{icon:"📖",name:"Rak Buku"}
    ],
    schedule:[
      {day:"Senin - Jumat",time:"08:00 - 22:00",closed:false},
      {day:"Sabtu - Minggu",time:"Tutup",closed:true}
    ],
    tip:'"Suasananya Tenang! Meja kayu panjang di tengah cocok banget untuk kerja kelompok."',
    coords:"-7.953000884346238, 112.61317464862965",
    img: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFWYBYv2TOEG07jLjEfjAB6wEnnFRMjm8m0U9AkUw0jdhuW8RJB8c55JK2_RxtmA0uW554M9nKscI5PGE5Lm2baIiL26JKAagoYD6e41gktsLuDyTGDZorbzgw9V2sI0d9O1g5OaA=w408-h305-k-no",
    bg:"linear-gradient(135deg,#5C4033 0%,#8B7355 100%)"
  },
  {
    id:4, name:"JOKOPI Malang",
    loc:"Penanggungan, Klojen, Malang",
    address:"Jl. Jakarta No.26, Penanggungan, Klojen, Kota Malang",
    rating:4.8, type:"Café",
    tags:["High-speed WiFi","AC","Power Outlet","Quiet Zone"],
    desc:"JOKOPI Malang hadir sebagai destinasi kopi modern yang menggabungkan cita rasa premium dengan harga terjangkau. Konsep open space dengan pencahayaan natural membuat suasana belajar terasa menyenangkan. Jaringan WiFi cepat dan tersedia banyak colokan listrik di setiap sudut.",
    facilities:[
      {icon:"📶",name:"WiFi 100 Mbps"},{icon:"❄️",name:"Full AC"},{icon:"🔌",name:"Power Outlet"},
      {icon:"🔇",name:"Quiet Zone"},{icon:"☕",name:"Coffee Premium"},{icon:"🅿️",name:"Area Parkir"}
    ],
    schedule:[
      {day:"Senin - Minggu",time:"Buka 24 Jam",closed:false},
    ],
    tip:'"Lantai 2 lebih tenang dan sinyal WiFi-nya lebih kencang. Buka lebih awal dari kebanyakan kafe sekitar."',
    coords:"-7.96277353505297, 112.6226754388384",
    img: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGLq6eLcPgXCvwr30vYP7PrdFfLJioxP3p-NKyKQYS-1-RRa080Df-4azSkqfq38c6y0kYH9Y4k8uBCYwHegfXkOTduqzjNTcSAobX8Fk9LlXUjpSUFciyO_ZqOv2mDJLE-FhAH_Q=w408-h306-k-no",
    bg:"linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%)"
  },
  {
    id:5, name:"AND Coffee",
    loc:"Penanggungan, Klojen, Malang",
    address:"Jl. Jakarta No.34, Penanggungan, Klojen, Kota Malang",
    rating:4.7, type:"Café",
    tags:["High-Speed WiFi","AC","Power Outlet","Parkir Gratis"],
    desc:"AND Coffee Space menawarkan konsep unik: kafe sekaligus ruang kerja yang fleksibel. Dengan interior yang minimalis dan modern, tempat ini populer di kalangan mahasiswa dan profesional muda. Tersedia meja besar untuk kerja kelompok dan booth untuk sesi kerja solo.",
    facilities:[
      {icon:"📶",name:"WiFi Cepat"},{icon:"❄️",name:"Full AC"},{icon:"🔌",name:"Power Outlet"},
      {icon:"🅿️",name:"Parkir Gratis"},{icon:"☕",name:"Coffee & Tea"},{icon:"🖥️",name:"Monitor Tersedia"}
    ],
    schedule:[
      {day:"Senin - Minggu",time:"10:00 - 22:00",closed:false}
    ],
    tip:'"Tersedia paket bundling kopi + coworking per hari. Tanya barista untuk promo spesial mahasiswa."',
    coords:"-7.962909457442121, 112.62209928301726",
    img: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFj5s5ifFqh0hTeQvtOiT1PtHe9e-YuGD74Aiif_-b6eDO1dKcm5Wxx0v8BVPtAg87YGfv4n8DcL1f1U_6KFWa2ow-2sg-rIV699oaFQM9MO_ZnIOkbG9hNIFkdwBaTJSGE_EG2KA=w408-h306-k-no",
    bg:"linear-gradient(135deg,#364f6b 0%,#3fc1c9 100%)"
  },
  {
    id:6, name:"ADA APA DENGAN KOPI",
    loc:"Penanggungan, Klojen, Malang",
    address:"Jl. Bandung No.28, Penanggungan, Klojen, Kota Malang",
    rating:4.6, type:"Café",
    tags:["High-Speed WiFi","AC","Instagrammable"],
    desc:"AADK Jalan Bandung adalah kafe dengan konsep nostalgia era 90an yang unik dan charming. Suasana retro yang kental membuat pengunjung merasa nyaman berlama-lama. Menu kopi manual brew dengan berbagai metode tersedia untuk para kopi enthusiast. Area belajar tersedia di pojok yang lebih tenang.",
    facilities:[
      {icon:"📶",name:"WiFi Gratis"},{icon:"❄️",name:"Full AC"},{icon:"☕",name:"Manual Brew"},
      {icon:"🎵",name:"Musik Lokal"},{icon:"📸",name:"Spot Foto 90s"},{icon:"🪴",name:"Area Outdoor"}
    ],
    schedule:[
      {day:"Senin - Minggu",time:"07:00 - 00:00",closed:false}
    ],
    tip:'"Coba V60 single origin Flores mereka yang legendaris. Area outdoor di malam hari sangat nyaman."',
    coords:"-7.960348715054762, 112.62319362412306",
    img: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEdlgVUeTQCTvaNVfpNaINW9zfisq6Q2AwDLV7Obtb30FXinxNbizW-CuOkNi1QWkfV1yMAFDiTrb00SCzsRulrJRrdIcUNWRpjclbfKEwMQmiOiGhDToviED3NZ16Yg8sxwt6QptoopAS9=w426-h240-k-no",
    bg:"linear-gradient(135deg,#c0392b 0%,#e74c3c 60%,#f39c12 100%)"
  },
  {
    id:7, name:"Labore Coffee",
    loc:"Mojolangu, Lowokwaru, Malang",
    address:"Jl. Soekarno Hatta No.25, Mojolangu, Lowokwaru, Kota Malang",
    rating:4.7, type:"Café",
    tags:["High-speed WiFi","AC","Power Outlet","Parkir Gratis"],
    desc:"Labore Coffee Eatery menghadirkan konsep work-friendly café yang serius mendukung produktivitas pengunjungnya. Setiap meja dilengkapi stop kontak, pencahayaan yang baik, dan kursi ergonomis. Menu makanan berat tersedia untuk menemani sesi kerja marathon.",
    facilities:[
      {icon:"📶",name:"WiFi 50 Mbps"},{icon:"❄️",name:"Full AC"},{icon:"🔌",name:"Power Outlet"},
      {icon:"🅿️",name:"Parkir Gratis"},{icon:"🍽️",name:"Full Menu Eatery"},{icon:"🪑",name:"Kursi Ergonomis"}
    ],
    schedule:[
      {day:"Senin - Minggu",time:"09:00 - 00:00",closed:false},
    ],
    tip:'"Paket makan siang + kopi tersedia di harga spesial. Tempat parkir luas, cocok yang bawa motor maupun mobil."',
    coords:"-7.946873514221842, 112.61553248177435",
    img: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAH5hZlfxgkIoorTOnaHp7ZBv1A2ltObl6GjzBBYbSEEUzfRgZtMMXhTxkw-mcT2JwhuftNvekDn6-mq96Zxau9_WxqKq2ij7st9SqffAffKcGQ8jhfm7JinpZZ96Ht0wOWHj7QCqGeShlcT=w408-h725-k-no",
    bg:"linear-gradient(135deg,#1B4332 0%,#40916C 100%)"
  },
  {
    id:8, name:"Athome Space",
    loc:"Jatimulyo, Lowokwaru, Malang",
    address:"Jl. Bunga Kumis Kucing No.5, Jatimulyo, Lowokwaru, Kota Malang",
    rating:4.8, type:"Coworking",
    tags:["High-speed WiFi","AC","Private Room","Parkir Gratis","Quiet Zone"],
    desc:"Athome Space adalah coworking space premium di kawasan Jatimulyo yang menyediakan berbagai pilihan ruang: open space, private room, ruang meeting, hingga ruang komunitas. Ideal untuk rapat organisasi, kerja tim, maupun sesi belajar individual yang membutuhkan ketenangan ekstra.",
    facilities:[
      {icon:"📶",name:"WiFi Fiber"},{icon:"❄️",name:"Full AC"},{icon:"🚪",name:"Private Room"},
      {icon:"🅿️",name:"Parkir Gratis"},{icon:"📺",name:"Proyektor"},{icon:"🔇",name:"Quiet Zone"}
    ],
    schedule:[
      {day:"Senin - Minggu",time:"08:00 - 21:00",closed:false},

    ],
    tip:'"Reservasi private room minimal H-1. Open space tersedia walk-in. Harga per jam sangat terjangkau untuk mahasiswa."',
    coords:"-7.939781235870914, 112.61584620859371",
    img: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFWKPdjSVcReWMf6XKW9KYkKQq8unQQqeTdOpy-4oGt4Z5SmyeMQh03dyGc0rzw-mtSpKBtFblzf7dXQtz0KYEmi4d2HZo5Z5kOk-tyFIMCfsHuecdXf6KejhgiFq4Ns8z_FJV5JbaSxB0=w224-h298-k-no",
    bg:"linear-gradient(135deg,#0d3b4a 0%,#1abc9c 100%)"
  },
  {
    id:9, name:"EZO CO-WORKING",
    loc:"Jatimulyo, Lowokwaru, Malang",
    address:"Jl. Dewandaru No.68, Jatimulyo, Lowokwaru, Kota Malang",
    rating:4.6, type:"Coworking",
    tags:["High-speed WiFi","AC","Power Outlet","Meeting Room"],
    desc:"EZO Co-Working Space hadir dengan konsep modern dan fungsional untuk para pekerja remote, freelancer, dan mahasiswa. Desain interior yang bersih dan rapi menciptakan nuansa profesional yang mendukung fokus. Tersedia berbagai pilihan paket: per jam, harian, hingga bulanan.",
    facilities:[
      {icon:"📶",name:"WiFi Fiber"},{icon:"❄️",name:"Full AC"},{icon:"🔌",name:"Power Outlet"},
      {icon:"🚪",name:"Meeting Room"},{icon:"🖨️",name:"Printer"},{icon:"☕",name:"Coffee Corner"}
    ],
    schedule:[
      {day:"Senin - Jumat",time:"09:00 - 18:00",closed:false},
      {day:"Sabtu",time:"09:00 - 17:00",closed:false},
      {day:"Minggu",time:"Tutup",closed:true}
    ],
    tip:'"Paket bulanan jauh lebih hemat jika sering digunakan. Member dapat akses 24 jam dengan deposit tambahan."',
    coords:"-7.940486904178362, 112.61417699250783",
    img: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEwNRjgCv-TBcXIHaWkrtnR8brc9FNnH9WTXrV2ZusEohZIQ7Isuz_jprqvwMLy0ayxwK7FSN78LSKnhSlWlJAufR_AwQoCx0t8FfdMYY1aZQHk8mRn_A4eZ-0MJxsBSgId_rPa=w428-h240-k-no",
    bg:"linear-gradient(135deg,#2c3e50 0%,#3498db 100%)"
  },
  {
    id:10, name:"G-Space",
    loc:"Mojolangu, Lowokwaru, Malang",
    address:"Jl. Candi Ngrimbi No.2, Mojolangu, Lowokwaru, Kota Malang",
    rating:4.7, type:"Coworking",
    tags:["High-speed WiFi","AC","Private Room","Parkir Gratis"],
    desc:"G-Space menawarkan solusi ruang kerja fleksibel di kawasan Mojolangu yang strategis. Dengan fasilitas meeting room yang representatif dan area coworking yang luas, tempat ini cocok untuk berbagai kebutuhan: rapat klien, kerja tim, presentasi, hingga belajar mandiri.",
    facilities:[
      {icon:"📶",name:"WiFi Fiber"},{icon:"❄️",name:"Full AC"},{icon:"🚪",name:"Private Room"},
      {icon:"🅿️",name:"Parkir Gratis"},{icon:"📺",name:"Smart TV"},{icon:"🖨️",name:"Printer & Scan"}
    ],
    schedule:[
      {day:"Senin - Sabtu",time:"08:00 - 17:00",closed:false},
      {day:"Minggu",time:"Tutup",closed:true}
    ],
    tip:'"Smart TV di ruang meeting bisa konek laptop langsung. Tersedia whiteboard besar untuk brainstorming."',
    coords:"-7.940407116928114, 112.63466793930202",
    img: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFiQD914o5iJeHe28AhXWq6Rib-Q1lVZNyuEhJ9IyZ_0tmOlLnPUSqpxXxZ4kEsFtdib5qfl-O-glNtdC4_N6pK_ycO0Few1hxBr0hnVUY2oB6xjHn7dwRpggAr6gxJ9_cKZ5D1-JIYR1DZ=w408-h612-k-no",
    bg:"linear-gradient(135deg,#5f4b8b 0%,#af76d5 100%)"
  },
  {
    id:11, name:"EJSC Co-Working",
    loc:"Oro-oro Dowo, Klojen, Malang",
    address:"Jl. Simpang Ijen No.2, Oro-oro Dowo, Klojen, Kota Malang",
    rating:4.9, type:"Coworking",
    tags:["High-speed WiFi","AC","Power Outlet","Quiet Zone","Meeting Room"],
    desc:"EJSC adalah salah satu coworking space terbaik dan terpopuler di Malang. Berlokasi di kawasan elite Ijen, tempat ini menawarkan fasilitas premium dengan standar perkantoran profesional. Koneksi internet fiber optic, ruang meeting terpisah, dan suasana yang kondusif menjadikan EJSC pilihan utama para profesional.",
    facilities:[
      {icon:"📶",name:"Fiber 200 Mbps"},{icon:"❄️",name:"Full AC"},{icon:"🔌",name:"Power Outlet"},
      {icon:"🔇",name:"Quiet Zone"},{icon:"🚪",name:"Meeting Room"},{icon:"☕",name:"Free Coffee"}
    ],
    schedule:[
      {day:"Senin - Jumat",time:"09:00 - 16:00",closed:false},
      {day:"Sabtu - Minggu",time:"Tutup",closed:true}
    ],
    tip:'"Member premium dapat akses loker dan alamat bisnis resmi. Lokasi strategis dekat kantor pemerintahan Klojen."',
    coords:"-7.963491705629199, 112.62417112395758",
    img: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEqCwcIYvcMbCyUXtHTIz-hmnWeYaT310hSfHXtIrgmzEs-CDM64DVCsZyCpNaNqUzKpPcWJgjKcvLQt-qKExi3BZf0C38x0GNCGIVwZPXSqtEKdQKsse1dXLBti78I0aVuUDgJ=w408-h306-k-no",
    bg:"linear-gradient(135deg,#004d40 0%,#00897b 100%)"
  },
  {
    id:12, name:"Ruang Perintis",
    loc:"Mojolangu, Lowokwaru, Malang",
    address:"Jl. Candi Sawentar No.209, Mojolangu, Lowokwaru, Kota Malang",
    rating:4.7, type:"Coworking",
    tags:["High-speed WiFi","AC","Power Outlet","Parkir Gratis","Quiet Zone"],
    desc:"Ruang Perintis adalah coworking space sekaligus inkubator bisnis yang mendukung pertumbuhan startup dan komunitas kreatif Malang. Selain fasilitas kerja premium, tersedia program mentorship dan networking event rutin. Tempat ideal untuk founders, developer, dan creative professional.",
    facilities:[
      {icon:"📶",name:"WiFi Fiber"},{icon:"❄️",name:"Full AC"},{icon:"🔌",name:"Power Outlet"},
      {icon:"🅿️",name:"Parkir Gratis"},{icon:"🔇",name:"Quiet Zone"},{icon:"🤝",name:"Networking Event"}
    ],
    schedule:[
      {day:"Senin - Jumat",time:"09:00 - 21:00",closed:false},
      {day:"Sabtu - Minggu",time:"Tutup",closed:true}
    ],
    tip:'"Event komunitas bulanan gratis untuk member. Cocok untuk startup yang butuh alamat domisili bisnis."',
    coords:"-7.940664420931305, 112.62518374115496",
    img: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFU_eCt7BO7cG2CmUkaD5Gh_0ETbq6-WF0hQYN9kZIf_NhTkNteyvLFi1Im-LrBse1sTEcFvjRVJTdL7Td2wo2BLke5lX4GHEY1zmQo2lFSoDkeZ36oRQz1GyNTkiHcDVaD6Woq=w408-h544-k-no",
    bg:"linear-gradient(135deg,#1a237e 0%,#283593 60%,#3949ab 100%)"
  }
];

// ==================== STATE ====================
let PLACES = [...PLACES_BASE];
let reviews = {};
let userLat = null, userLng = null;
let locationSet = false;

PLACES_BASE.forEach(p => {
  reviews[p.id] = [
    {name:"Andi Firmansyah",initials:"AF",avatarClass:"green",stars:5,text:'"Tempat yang sangat nyaman untuk belajar. WiFi kencang dan suasana kondusif. Highly recommended!"',date:"2 hari yang lalu"},
    {name:"Siti Pertiwi",initials:"SP",avatarClass:"teal",stars:4,text:'"Lokasinya strategis dan fasilitasnya lengkap. Harga sangat terjangkau untuk mahasiswa."',date:"1 minggu yang lalu"}
  ];
});

let currentPage = 'home';
let prevPage = 'home';
let currentPlaceId = null;
let selectedStar = 0;
let minRating = 4.5;
let showCount = 4;

// ==================== HAVERSINE DISTANCE ====================
function haversine(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLng/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

function getDistLabel(km) {
  if (km < 1) return (km * 1000).toFixed(0) + ' m';
  return km.toFixed(1) + ' km';
}
function getTimeLabel(km) {
  const mins = Math.round(km / 0.35); // ~21 km/h motor
  if (mins < 60) return `± ${mins} Menit`;
  return `± ${Math.round(mins/60)} Jam`;
}

function sortByDistance(arr) {
  if (!locationSet) return arr;
  return [...arr].sort((a,b) => {
    const ca = a.coords.split(',').map(Number);
    const cb = b.coords.split(',').map(Number);
    return haversine(userLat,userLng,ca[0],ca[1]) - haversine(userLat,userLng,cb[0],cb[1]);
  });
}

function getPlaceDist(p) {
  if (!locationSet) return { dist: p.dist || '—', time: p.time || '' };
  const c = p.coords.split(',').map(Number);
  const km = haversine(userLat, userLng, c[0], c[1]);
  return { dist: getDistLabel(km), time: getTimeLabel(km), km };
}

// ==================== NAVIGATION ====================
function showPage(page, placeId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  prevPage = currentPage;
  currentPage = page;

  if (page === 'detail') {
    document.getElementById('page-detail').classList.add('active');
    document.getElementById('floatingBack').style.display = 'block';
    loadDetail(placeId);
  } else {
    document.getElementById('floatingBack').style.display = 'none';
    document.getElementById('page-' + page).classList.add('active');
    document.getElementById('nav-' + page)?.classList.add('active');
  }
  if (page === 'search') renderSearch('');
  if (page === 'reko') renderReko();
  window.scrollTo(0, 0);
}

function goBack() {
  const dest = (prevPage === 'home' || prevPage === 'reko' || prevPage === 'search') ? prevPage : 'home';
  showPage(dest);
}

// ==================== GEOLOCATION ====================
function setLocation() {
  const placeholder = document.getElementById('mapPlaceholder');
  const loading = document.getElementById('mapLoading');
  const frame = document.getElementById('mapFrame');
  placeholder.style.display = 'none';
  loading.classList.add('show');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      userLat = pos.coords.latitude;
      userLng = pos.coords.longitude;
      locationSet = true;
      frame.src = `https://www.openstreetmap.org/export/embed.html?bbox=${userLng-.02},${userLat-.02},${userLng+.02},${userLat+.02}&layer=mapnik&marker=${userLat},${userLng}`;
      frame.style.display = 'block';
      loading.classList.remove('show');
      document.getElementById('homeSubtitle').textContent = 'Ruang belajar terdekat dari lokasi Anda saat ini!';
      renderHomeCards();
    }, _ => {
      // fallback: Malang center
      userLat = -7.9666;
      userLng = 112.6326;
      locationSet = true;
      frame.src = `https://www.openstreetmap.org/export/embed.html?bbox=${userLng-.02},${userLat-.02},${userLng+.02},${userLat+.02}&layer=mapnik&marker=${userLat},${userLng}`;
      frame.style.display = 'block';
      loading.classList.remove('show');
      renderHomeCards();
    });
  } else {
    userLat = -7.9666; userLng = 112.6326;
    locationSet = true;
    frame.src = `https://www.openstreetmap.org/export/embed.html?bbox=${userLng-.02},${userLat-.02},${userLng+.02},${userLat+.02}&layer=mapnik&marker=${userLat},${userLng}`;
    frame.style.display = 'block';
    loading.classList.remove('show');
    renderHomeCards();
  }
}

// ==================== HOME CARDS ====================
function renderHomeCards() {
  const grid = document.getElementById('homeCards');
  const sorted = sortByDistance(PLACES);
  const three = sorted.slice(0, 3);
  grid.innerHTML = three.map(p => {
    const d = getPlaceDist(p);
    return `
    <div class="card">
      <div class="card-img-bg" style="background-image:url('${p.img}'),${p.bg};background-size:cover;background-position:center;height:229px;position:relative">
        <div class="rating-badge">⭐ ${p.rating}</div>
      </div>
      <div class="card-body">
        <div>
          <div class="card-name">${p.name}${p.isUserAdded?'<span class="user-place-badge">Komunitas</span>':''}</div>
          <div class="card-loc">📍 ${p.loc}</div>
        </div>
        <div class="card-tags">${p.tags.slice(0,3).map(t=>`<span class="tag">${t}</span>`).join('')}</div>
        <div class="card-footer">
          <button class="btn-detail" onclick="showPage('detail',${p.id})">Lihat Detail</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ==================== REKOMENDASI ====================
function renderReko() {
  const fWifi = document.getElementById('f-wifi')?.checked;
  const fAc = document.getElementById('f-ac')?.checked;
  const fQuiet = document.getElementById('f-quiet')?.checked;
  const fOutlet = document.getElementById('f-outlet')?.checked;
  const fPark = document.getElementById('f-parking')?.checked;
  const maxDist = parseFloat(document.getElementById('distRange')?.value || 20);

  let filtered = sortByDistance(PLACES).filter(p => {
    const d = getPlaceDist(p);
    if (locationSet && d.km !== undefined && d.km > maxDist) return false;
    if (p.rating < minRating) return false;
    const tags = (p.tags.join(' ') + ' ' + p.facilities.map(f=>f.name).join(' ')).toLowerCase();
    if (fWifi && !tags.includes('wifi')) return false;
    if (fAc && !tags.includes('ac')) return false;
    if (fQuiet && !tags.includes('quiet')) return false;
    if (fOutlet && !tags.includes('power') && !tags.includes('outlet')) return false;
    if (fPark && !tags.includes('parkir')) return false;
    return true;
  });

  const grid = document.getElementById('rekoGrid');
  const shown = filtered.slice(0, showCount);
  if (shown.length === 0) {
    grid.innerHTML = '<p style="color:var(--text2);padding:24px;grid-column:1/-1;text-align:center">Tidak ada tempat yang sesuai dengan filter ini.</p>';
    return;
  }
  grid.innerHTML = shown.map(p => {
    const d = getPlaceDist(p);
    return `
    <div class="reko-card" onclick="showPage('detail',${p.id})">
      <div class="reko-card-img" style="background-image:url('${p.img}'),${p.bg};background-size:cover;background-position:center">
        <div class="rating-badge">⭐ ${p.rating}</div>
      </div>
      <div class="reko-card-body">
        <div class="reko-card-row">
          <span class="reko-card-name">${p.name}${p.isUserAdded?'<span class="user-place-badge">Komunitas</span>':''}</span>
          <span class="reko-dist">${d.dist}</span>
        </div>
        <div class="reko-tags">${p.tags.map(t=>`<span class="reko-tag">${t}</span>`).join('')}</div>
        <div style="display:flex;align-items:center;gap:8px;padding-top:8px">
          <span style="color:var(--primary);font-weight:700;font-size:14px;cursor:pointer">Lihat Detail →</span>
        </div>
      </div>
    </div>`;
  }).join('');
}

function filterCards() { renderReko(); }
function setRating(v) {
  minRating = parseFloat(v);
  document.getElementById('btn-40').classList.toggle('active', v === '4.0');
  document.getElementById('btn-45').classList.toggle('active', v === '4.5');
  renderReko();
}
function resetFilter() {
  document.querySelectorAll('.sidebar input[type=checkbox]').forEach(c => c.checked = false);
  document.getElementById('distRange').value = 20;
  minRating = 4.5;
  document.getElementById('btn-40').classList.remove('active');
  document.getElementById('btn-45').classList.add('active');
  showCount = 4;
  renderReko();
}
function loadMore() {
  // Show all remaining
  showCount = Math.min(showCount + 4, PLACES.length + 10);
  renderReko();
  // Also render any extra places beyond the base 12
  if (showCount >= PLACES.length) {
    document.querySelector('.btn-load').textContent = 'Semua Tempat Ditampilkan';
    setTimeout(() => { document.querySelector('.btn-load').textContent = 'Muat Lebih Banyak'; }, 2000);
  }
}

// ==================== PENCARIAN ====================
function renderSearch(q) {
  const grid = document.getElementById('searchGrid');
  const term = q.toLowerCase().trim();
  const pool = sortByDistance(PLACES);
  const results = term ? pool.filter(p => {
    const hay = (p.name + p.loc + p.type + p.tags.join(' ') + p.facilities.map(f=>f.name).join(' ')).toLowerCase();
    return hay.includes(term);
  }) : pool;

  if (results.length === 0) {
    grid.innerHTML = `<div class="no-result"><h3>Tempat tidak ditemukan</h3><p>Coba kata kunci lain atau gunakan filter yang berbeda.</p></div>`;
    return;
  }
  grid.innerHTML = results.map(p => searchCard(p)).join('');
}

function searchCard(p) {
  const d = getPlaceDist(p);
  return `<div class="search-card" onclick="showPage('detail',${p.id})">
    <div class="search-card-img" style="background-image:url('${p.img}'),${p.bg};background-size:cover;background-position:center">
      <div class="rating-badge" style="top:8px;right:8px;font-size:12px;padding:4px 8px">⭐ ${p.rating}</div>
    </div>
    <div class="search-card-body">
      <div>
        <div class="search-card-name">${p.name}${p.isUserAdded?'<span class="user-place-badge">Komunitas</span>':''}</div>
        <div class="search-card-loc">📍 ${p.loc} · ${d.dist}</div>
      </div>
      <div class="search-card-tags">${p.tags.slice(0,2).map(t=>`<span class="search-tag">${t}</span>`).join('')}</div>
      <button class="btn-detail-sm" onclick="event.stopPropagation();showPage('detail',${p.id})">Lihat Detail</button>
    </div>
  </div>`;
}

function doSearch() { renderSearch(document.getElementById('searchInput').value); }
function quickFilter(q) {
  document.getElementById('searchInput').value = q;
  renderSearch(q);
  document.getElementById('searchFilterPanel').classList.remove('show');
}
function toggleSearchFilter() { document.getElementById('searchFilterPanel').classList.toggle('show'); }

// ==================== DETAIL ====================
function loadDetail(id) {
  if (!id) return;
  currentPlaceId = id;
  const p = PLACES.find(x => x.id === id);
  if (!p) return;

  const el = document.getElementById('detailHeroImg');
  el.style.backgroundImage = `url('${p.img}'), ${p.bg}`;
  el.style.backgroundSize = 'cover';
  el.style.backgroundPosition = 'center';
  document.getElementById('detailTitle').textContent = p.name;
  document.getElementById('detailRating').textContent = p.rating + '/5 (' + (reviews[p.id]?.length || 0) + ' Ulasan)';
  document.getElementById('detailDesc').textContent = p.desc;
  document.getElementById('detailAddress').textContent = p.address;

  const d = getPlaceDist(p);
  document.getElementById('detailDist').textContent = d.dist;
  document.getElementById('detailTime').textContent = d.time;
  document.getElementById('detailTip').textContent = p.tip;

  const coords = p.coords.split(',');
  const lat = parseFloat(coords[0]), lng = parseFloat(coords[1]);
  document.getElementById('detailMapFrame').src = `https://www.openstreetmap.org/export/embed.html?bbox=${lng-.01},${lat-.01},${lng+.01},${lat+.01}&layer=mapnik&marker=${lat},${lng}`;

  document.getElementById('detailFacilities').innerHTML = p.facilities.map(f =>
    `<div class="facility-item"><span style="font-size:20px">${f.icon}</span><span>${f.name}</span></div>`
  ).join('');

  document.getElementById('detailSchedule').innerHTML = p.schedule.map(s =>
    `<div class="schedule-row"><span>${s.day}</span><span class="${s.closed?'closed':'time'}">${s.time}</span></div>`
  ).join('');

  renderReviews(id);
  selectedStar = 0;
  document.getElementById('reviewForm').classList.remove('show');
  document.querySelectorAll('.star-select span').forEach(s => s.classList.remove('active'));
}

function renderReviews(id) {
  const list = document.getElementById('reviewsList');
  list.innerHTML = (reviews[id] || []).map(r => `
    <div class="review-item">
      <div class="review-header">
        <div class="reviewer">
          <div class="avatar ${r.avatarClass}">${r.initials}</div>
          <div><div class="reviewer-name">${r.name}</div><div class="reviewer-date">${r.date}</div></div>
        </div>
        <div class="stars">${'★'.repeat(r.stars)}${'☆'.repeat(5-r.stars)}</div>
      </div>
      <p class="review-text">${r.text}</p>
    </div>`).join('');
}

function toggleReviewForm() { document.getElementById('reviewForm').classList.toggle('show'); }
function setStar(n) {
  selectedStar = n;
  document.querySelectorAll('.star-select span').forEach((s,i) => s.classList.toggle('active', i < n));
}
function submitReview() {
  const name = document.getElementById('reviewName').value.trim();
  const text = document.getElementById('reviewText').value.trim();
  if (!name || !text || !selectedStar) { alert('Lengkapi nama, rating bintang, dan ulasan Anda!'); return; }
  const initials = name.split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2);
  const av = ['green','teal'][Math.floor(Math.random()*2)];
  if (!reviews[currentPlaceId]) reviews[currentPlaceId] = [];
  reviews[currentPlaceId].unshift({name, initials, avatarClass:av, stars:selectedStar, text:`"${text}"`, date:"Baru saja"});
  renderReviews(currentPlaceId);
  document.getElementById('reviewName').value = '';
  document.getElementById('reviewText').value = '';
  selectedStar = 0;
  document.querySelectorAll('.star-select span').forEach(s => s.classList.remove('active'));
  document.getElementById('reviewForm').classList.remove('show');
  // Update rating count
  const p = PLACES.find(x => x.id === currentPlaceId);
  if (p) document.getElementById('detailRating').textContent = p.rating + '/5 (' + reviews[currentPlaceId].length + ' Ulasan)';
  alert('Ulasan berhasil dikirim! Terima kasih.');
}

// ==================== TAMBAH TEMPAT ====================
function openAddPlace() {
  document.getElementById('addPlaceModal').classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeAddPlace() {
  document.getElementById('addPlaceModal').classList.remove('show');
  document.body.style.overflow = '';
}

const COLORS = [
  "linear-gradient(135deg,#2d6a4f 0%,#52b788 100%)",
  "linear-gradient(135deg,#74512D 0%,#c8956c 100%)",
  "linear-gradient(135deg,#364f6b 0%,#3fc1c9 100%)",
  "linear-gradient(135deg,#1a1a2e 0%,#0f3460 100%)",
  "linear-gradient(135deg,#5f4b8b 0%,#af76d5 100%)",
  "linear-gradient(135deg,#004d40 0%,#00897b 100%)",
  "linear-gradient(135deg,#1B4332 0%,#40916C 100%)"
];

function submitPlace() {
  const name = document.getElementById('ap-name').value.trim();
  const address = document.getElementById('ap-address').value.trim();
  const type = document.getElementById('ap-type').value;
  const contrib = document.getElementById('ap-contrib').value.trim();
  const desc = document.getElementById('ap-desc').value.trim();

  if (!name || !address || !type || !contrib) {
    alert('Mohon lengkapi semua field wajib (*)');
    return;
  }

  const tags = [];
  if (document.getElementById('ap-wifi').checked) tags.push('WiFi');
  if (document.getElementById('ap-ac').checked) tags.push('AC');
  if (document.getElementById('ap-quiet').checked) tags.push('Quiet Zone');
  if (document.getElementById('ap-outlet').checked) tags.push('Power Outlet');
  if (document.getElementById('ap-parking').checked) tags.push('Parkir Gratis');
  if (document.getElementById('ap-coffee').checked) tags.push('Café');

  const facilities = [];
  if (document.getElementById('ap-wifi').checked) facilities.push({icon:'📶',name:'WiFi'});
  if (document.getElementById('ap-ac').checked) facilities.push({icon:'❄️',name:'Full AC'});
  if (document.getElementById('ap-quiet').checked) facilities.push({icon:'🔇',name:'Quiet Zone'});
  if (document.getElementById('ap-outlet').checked) facilities.push({icon:'🔌',name:'Power Outlet'});
  if (document.getElementById('ap-parking').checked) facilities.push({icon:'🅿️',name:'Parkir Gratis'});
  if (document.getElementById('ap-coffee').checked) facilities.push({icon:'☕',name:'Café'});
  if (facilities.length === 0) facilities.push({icon:'🏢',name:'Tempat Belajar'});

  // Parse loc from address
  const locParts = address.split(',');
  const loc = locParts.slice(-3).map(s=>s.trim()).join(', ') || address;

  const newId = Math.max(...PLACES.map(p=>p.id)) + 1;
  const newPlace = {
    id: newId,
    name, address, loc, type,
    rating: 4.5,
    tags: tags.length > 0 ? tags : ['Tempat Belajar'],
    desc: desc || `${name} adalah tempat belajar yang ditambahkan oleh komunitas Study Space. Ditambahkan oleh: ${contrib}.`,
    facilities,
    schedule: [{day:'Senin - Minggu', time:'Lihat lokasi', closed:false}],
    tip: `"Ditambahkan oleh komunitas: ${contrib}. Informasi dapat berubah — harap verifikasi langsung."`,
    coords: "-7.9666,112.6326",
    bg: COLORS[Math.floor(Math.random() * COLORS.length)],
    isUserAdded: true
  };

  PLACES.push(newPlace);
  reviews[newId] = [];

  // Reset form
  document.getElementById('ap-name').value = '';
  document.getElementById('ap-address').value = '';
  document.getElementById('ap-type').value = '';
  document.getElementById('ap-desc').value = '';
  document.getElementById('ap-contrib').value = '';
  ['ap-wifi','ap-ac','ap-quiet','ap-outlet','ap-parking','ap-coffee'].forEach(id => {
    document.getElementById(id).checked = false;
  });

  closeAddPlace();
  alert(`✅ Terima kasih, ${contrib}! "${name}" berhasil ditambahkan ke Study Space.`);
  renderSearch('');
  renderHomeCards();
}

// Close modal on overlay click
document.getElementById('addPlaceModal').addEventListener('click', function(e) {
  if (e.target === this) closeAddPlace();
});

// ==================== INIT ====================
document.getElementById('floatingBack').style.display = 'none';
renderHomeCards();
renderSearch('');
