// === public/swipe/swipe.js ===
// Ambil data dari API dan tampilkan sebagai konten swipeable fullscreen

const baseURL = location.origin; // Otomatis sesuaikan dengan domain saat live

fetch(`${baseURL}/api/admin`)
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('swiperContent');
    const loading = document.getElementById('loading');

    if (!data.length) {
      container.innerHTML = `<div class="swiper-slide"><p class="overlay">Tidak ada konten tersedia.</p></div>`;
      loading.style.display = 'none';
      return;
    }

    data.forEach(item => {
      const slide = document.createElement('div');
      slide.className = 'swiper-slide';
      slide.style.backgroundImage = `url('${item.gambar}')`;

      slide.innerHTML = `
        <div class="overlay">
          <div class="kategori">${item.kategori}</div>
          <h2>${item.judul}</h2>
          <p>${item.deskripsi}</p>
        </div>

        <div class="interaksi">
          <button onclick="alert('❤️ Anda menyukai ini!')">❤️</button>
          <button onclick="alert('🔄 Bagikan ke teman!')">🔄</button>
          <button onclick="alert('💬 Fitur komentar belum tersedia')">💬</button>
        </div>
      `;

      container.appendChild(slide);
    });

    // Inisialisasi Swiper setelah semua slide siap
    new Swiper('.swiper', {
      direction: 'vertical',
      loop: false,
      mousewheel: true,
    });

    // Hilangkan loading setelah render selesai
    loading.style.display = 'none';
  })
  .catch(err => {
    console.error('❌ Gagal memuat data konten:', err);
    const container = document.getElementById('swiperContent');
    container.innerHTML = `<div class="swiper-slide"><p class="overlay">Gagal memuat konten. Silakan coba lagi nanti.</p></div>`;
    document.getElementById('loading').style.display = 'none';
  });
