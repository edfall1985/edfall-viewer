document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  const host = window.location.origin;

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
      gambar: `${host}/assets/1.avif`
    }
  ];

  data.forEach(item => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.innerHTML = `
      <img src="${item.gambar}" alt="${item.judul}">
      <div class="info-box">
        <h3>${item.judul}</h3>
        <p>${item.kategori}</p>
        <div class="actions">
          <button class="like-btn">❤️</button>
          <button class="share-btn">🔗</button>
        </div>
      </div>
    `;
    gallery.appendChild(slide);
  });

  new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    keyboard: {
      enabled: true,
    },
  });

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("like-btn")) {
      alert("Liked!");
    } else if (e.target.classList.contains("share-btn")) {
      alert("Share link copied!");
    }
  });
});
