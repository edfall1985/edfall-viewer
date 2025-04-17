// ✅ Jalankan script saat DOM sudah siap
document.addEventListener("DOMContentLoaded", () => {
  // 🧠 Ambil elemen kontainer swiper
  const gallery = document.getElementById("swiperContent");
  if (!gallery) return console.warn("Element swiperContent tidak ditemukan");

  // 🌐 Ambil host domain secara dinamis
  const host = window.location.origin;

  // 💬 Tampilkan splash screen dengan quote acak
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

  // 📦 Data dummy konten edukatif
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
      gambar: `${host}/assets/1.avi` // Uji error fallback
    }
  ];

  // 🔄 Render setiap item jadi slide
  data.forEach(item => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";

    slide.innerHTML = `
      <img src="${item.gambar}" alt="${item.judul}" 
           onerror="this.onerror=null; this.src='assets/images/default/default-thumbnail-16x9-transparent.png';" />
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

  // 🚀 Inisialisasi Swiper (harus sudah include Swiper JS via CDN)
  const swiper = new Swiper(".swiper", {
    direction: "vertical",
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    on: {
      slideChange: () => {
        console.log("Slide aktif:", swiper.activeIndex);
      }
    }
  });
});
