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
    : "/assets/images/default/default-fallback-square-transparent.png";
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
