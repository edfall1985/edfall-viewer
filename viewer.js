// File: viewer.js
// 🔧 Modul fallback gambar dinamis berdasarkan kategori dan rasio

let fallbackMap = null;

/**
 * 🔁 Load fallback JSON (hanya sekali)
 */
async function loadFallbackJSON() {
  if (fallbackMap) return fallbackMap;

  try {
    const res = await fetch("/assets/images/default/default-images.json");
    if (!res.ok) throw new Error("Gagal fetch default-images.json");
    fallbackMap = await res.json();
    return fallbackMap;
  } catch (err) {
    console.error("❌ Gagal memuat fallback JSON:", err);
    return [];
  }
}

/**
 * 🎯 Ambil URL fallback berdasarkan kategori dan rasio
 */
async function getFallbackImage(category = "content", ratio = "square") {
  const map = await loadFallbackJSON();
  const found = map.find(
    item => item.category === category && item.ratio === ratio
  );

  return found
    ? `/assets/images/default/${found.filename}`
    : "/assets/images/default/default-fallback-square-transparent.png";
}

/**
 * 🖼️ Aplikasikan fallback image ke semua <img> yang punya data-fallback
 */
async function applyFallbackImages() {
  const images = document.querySelectorAll("img[data-fallback]");

  for (let img of images) {
    img.onerror = async () => {
      try {
        const [category, ratio] = (img.dataset.fallback || "content-square").split("-");
        const fallbackSrc = await getFallbackImage(category, ratio);
        console.warn(`🛡️ Fallback digunakan untuk: ${img.src} → ${fallbackSrc}`);
        img.src = fallbackSrc;
        img.onerror = null;
      } catch (e) {
        console.error("❌ Gagal menerapkan fallback untuk:", img, e);
      }
    };
  }
}

// 🚀 Jalankan otomatis saat DOM siap
document.addEventListener("DOMContentLoaded", applyFallbackImages);
