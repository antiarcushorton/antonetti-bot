window.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.fade-image');

  images.forEach((img, index) => {
    setTimeout(() => {
      img.style.opacity = 1; // Fade in
    }, index * 1000); // 0.5s delay between each
  });
});
