// ================================
//  CARRUSEL INFINITO AUTOMÁTICO
// ================================

const track = document.querySelector(".carousel__track");
let slides = Array.from(track.children);

let isPaused = false;
let speed = 1; // velocidad del movimiento
let position = 0;

// Duplicamos elementos para efecto infinito
slides.forEach(slide => {
  const clone = slide.cloneNode(true);
  track.appendChild(clone);
});

function animateCarousel() {
  if (!isPaused) {
    position -= speed;
    track.style.transform = `translateX(${position}px)`;

    const firstWidth = slides[0].getBoundingClientRect().width + 18;

    // Cuando un slide sale por completo, se mueve al final
    if (Math.abs(position) >= firstWidth) {
      track.appendChild(track.firstElementChild);
      track.style.transform = `translateX(0px)`;
      position = 0;
    }
  }
  requestAnimationFrame(animateCarousel);
}

animateCarousel();

// Pausar en hover
track.addEventListener("mouseenter", () => (isPaused = true));
track.addEventListener("mouseleave", () => (isPaused = false));

// Pausar en touch móvil
track.addEventListener("touchstart", () => (isPaused = true));
track.addEventListener("touchend", () => (isPaused = false));
