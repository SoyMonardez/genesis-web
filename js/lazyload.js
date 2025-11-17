// ===============================
// LAZY LOAD PARA GIFs DE SERVICIOS
// ===============================
const lazyImgs = document.querySelectorAll("img[data-lazy]");

const lazyObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute("data-lazy");
                img.removeAttribute("data-lazy");
                observer.unobserve(img);
            }
        });
    },
    { rootMargin: "150px" }
);

lazyImgs.forEach(img => lazyObserver.observe(img));
