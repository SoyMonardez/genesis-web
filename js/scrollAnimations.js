// ===============================
// ANIMACIÓN "REVEAL"
// ===============================
const revealEls = document.querySelectorAll(".reveal");

function revealOnScroll() {
    revealEls.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

document.addEventListener("DOMContentLoaded", () => {
    const item = document.querySelector(".hero__img");
    setTimeout(() => item.classList.add("visible"), 200);
});
