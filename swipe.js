// File: swipe.js
// 🚀 Jalankan saat DOM siap
document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("swiperContent");
  if (!gallery) return console.warn("❗ Elemen #swiperContent tidak ditemukan");

  const host = window.location.origin;

  // ✨ Splash quote acak saat awal dibuka
  const quotes = [
    "“Ilmu itu tak cukup dibaca — harus dirasa.”",
    "“Swipe boleh, tapi jangan hidup lo diswipe orang lain.”",
    "“Gagal bukan akhir, kecuali lo berhenti belajar.”",
    "“Konten baik itu bukan viral, tapi bermanfaat.”",
    "“Kalo lo nggak paham hidup lo, ya jangan swipe orang lain.”"
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  const splashSlide = document.createElement("div");
  splashSlide.className = "swiper-slide splash";
  splashSlide.innerHTML = `
    <div class="splash-screen">
      <h2>${randomQuote}</h2>
      <p class="splash-meta">~ Edfall Viewer</p>
    </div>
  `;
  gallery.appendChild(splashSlide);

  // 📦 Dummy konten
  const data = [
    {
      judul: "Masa Depan Kecerdasan Buatan",
      kategori: "AI makin jenius. Tapi lo? Makin adaptif atau makin dikuasai?",
      gambar: `${host}/assets/3.jpeg`
    },
    {
      judul: "Blockchain di Luar Kripto",
      kategori: "Katanya desentralisasi. Tapi kenapa yang ngatur tetap elite digital?",
      gambar: `${host}/assets/4.jpeg`
    },
    {
      judul: "Robotika dalam Kehidupan Sehari-hari",
      kategori: "Robot bantu lo kerja. Tapi siapa yang bantu lo tetap jadi manusia?",
      gambar: `${host}/assets/1.avi` // 🧪 Test fallback
    }
  ];

  // 🎨 Buat setiap slide dari data
  data.forEach(item => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.innerHTML = `
      <img 
        src="${item.gambar}" 
        alt="${item.judul}"
        data-fallback="content-16x9"
        loading="lazy"
      />
      <div class="info-box">
        <h3>${item.judul}</h3>
        <p>${item.kategori}</p>
        <div class="actions">
          <button class="like-btn">❤️</button>
        </div>
      </div>
    `;
    gallery.appendChild(slide);
  });

  // 🧭 Inisialisasi Swiper
  const swiper = new Swiper(".swiper", {
    direction: "vertical",
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    on: {
      slideChange: () => {
        console.log("📍 Slide aktif:", swiper.activeIndex);
      }
    }
  });

  // ✅ Aktifkan fallback image dari viewer.js
  if (typeof applyFallbackImages === "function") {
    applyFallbackImages();
  }
});
