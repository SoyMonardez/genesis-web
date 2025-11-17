// ===============================
// SCROLLSPY NAVBAR
// ===============================

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav__links a");

function scrollSpy() {
    let scrollY = window.pageYOffset;

    sections.forEach(sec => {
        const sectionTop = sec.offsetTop - 120;
        const sectionHeight = sec.offsetHeight;
        const sectionId = sec.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navItems.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${sectionId}`) {
                    link.classList.add("active");
                }
            });
        }
    });
}

window.addEventListener("scroll", scrollSpy);
scrollSpy();
