// File: /js/viewer.js

let fallbackMap = null;

async function loadFallbackJSON() {
  if (fallbackMap) return fallbackMap;

  const res = await fetch("/assets/images/default/default-images.json");
  fallbackMap = await res.json();
  return fallbackMap;
}

async function getFallbackImage(category = "content", ratio = "square") {
  const map = await loadFallbackJSON();
  const found = map.find(
    item => item.category === category && item.ratio === ratio
  );
  return found
    ? `/assets/images/default/${found.filename}`
    : "/assets/images/default/default-fallback-square-tran// File: viewer.js
// 🔧 Modul fallback gambar dinamis berdasarkan kategori dan rasio

let fallbackMap = null;

/**
 * 🔁 Load fallback JSON (hanya sekali)
 * Disimpan di memori agar tidak fetch berkali-kali
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
    return []; // fallback kosong, mencegah error
  }
}

/**
 * 🎯 Ambil URL fallback berdasarkan kategori dan rasio
 * @param {string} category - seperti "content", "avatar", dll
 * @param {string} ratio - seperti "square", "16x9", "4x3"
 * @returns {string} path fallback image
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
 * Format data-fallback: "category-ratio" → contoh: "content-16x9"
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
        img.onerror = null; // Hentikan loop error
      } catch (e) {
        console.error("❌ Gagal menerapkan fallback untuk:", img, e);
      }
    };
  }
}

// 🚀 Jalankan otomatis saat DOM siap
document.addEventListener("DOMContentLoaded", applyFallbackImages);
sparent.png";
}

async function applyFallbackImages() {
  const images = document.querySelectorAll("img[data-fallback]");

  for (let img of images) {
    img.onerror = async () => {
      const [category, ratio] = img.dataset.fallback.split("-");
      const fallbackSrc = await getFallbackImage(category, ratio);
      img.src = fallbackSrc;
      img.onerror = null;
    };
  }
}

document.addEventListener("DOMContentLoaded", applyFallbackImages);
