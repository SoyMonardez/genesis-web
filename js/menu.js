const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const menuIcon = menuToggle.querySelector("span");

// Crear overlay para poder cerrar tocando fuera
let overlay = document.createElement("div");
overlay.id = "menu-overlay";
document.body.appendChild(overlay);

// ABRIR / CERRAR MENÚ
menuToggle.addEventListener("click", () => {
    toggleMenu();
});

// CERRAR MENÚ AL TOCAR UN ENLACE
document.querySelectorAll("#nav-links a").forEach(link => {
    link.addEventListener("click", () => closeMenu());
});

// CERRAR MENU AL TOCAR FUERA
overlay.addEventListener("click", () => closeMenu());

function toggleMenu() {
    const isOpen = navLinks.classList.toggle("open");
    overlay.classList.toggle("show", isOpen);

    // animación icono
    menuIcon.classList.add("rotate");
    setTimeout(() => {
        menuIcon.textContent = isOpen ? "close" : "menu";
        menuIcon.classList.remove("rotate");
    }, 200);

    // bloquear scroll cuando está abierto
    document.body.style.overflow = isOpen ? "hidden" : "";
}

function closeMenu() {
    navLinks.classList.remove("open");
    overlay.classList.remove("show");

    menuIcon.textContent = "menu";

    document.body.style.overflow = "";
}
