let currentIndex = 0; // Tracks current image
const images = document.querySelectorAll(".gallery-img");
const totalImages = images.length; // Total images in gallery

function updateCarousel() {
  const carouselContainer = document.querySelector(".carousel-container");
  const imageWidth = images[0].clientWidth; // Gets width of an image

  // Moves the carousel to show the current image
  carouselContainer.style.transform = `translateX(${
    -currentIndex * imageWidth
  }px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel(); // 🛠️ Add this!
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateCarousel(); // 🛠️ Add this!
}

// Optional: make sure first image is positioned correctly on load
window.addEventListener("load", updateCarousel);
