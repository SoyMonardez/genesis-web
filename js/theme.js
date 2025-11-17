// ===============================
//  TEMA CLARO / OSCURO CON ICONOS GOOGLE
// ===============================

const themeBtn = document.getElementById("theme-toggle");
const themeIcon = themeBtn.querySelector("span");
const html = document.documentElement;

// Cargar tema guardado
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    html.setAttribute("data-theme", savedTheme);
    themeIcon.textContent = savedTheme === "dark" ? "light_mode" : "dark_mode";
}

// Cambiar tema al hacer click
themeBtn.addEventListener("click", () => {
    const current = html.getAttribute("data-theme");
    const newTheme = current === "dark" ? "light" : "dark";

    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    // Cambiar ícono según tema
    themeIcon.textContent = newTheme === "dark" ? "light_mode" : "dark_mode";
});
const logoIcon = document.getElementById("logo-icon");

function actualizarIcono() {
    const tema = document.documentElement.getAttribute("data-theme");

    if (tema === "dark") {
        logoIcon.src = "iconBlanco.png";  // icono blanco
    } else {
        logoIcon.src = "iconNegro.png";   // icono negro
    }
}

// Ejecuta al cargar
actualizarIcono();

// Ejecuta cada vez que se cambia el tema
document.getElementById("theme-toggle").addEventListener("click", () => {
    setTimeout(actualizarIcono, 150);
});
