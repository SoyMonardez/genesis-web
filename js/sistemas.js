
  // ============================
  // DATOS DE LOS SISTEMAS
  // ============================
  const systemsData = [
    {
      id: "academic",
      nombre: "Academic System",
      descripcion:
        "Gestión escolar completa. Panel docente, alumno y administrador.",
      link: "#", // luego pondrás el enlace real
      cover:
        "../assets/academic-system.png",
      imagenes: [
        "../assets/academic-system.png",
        "../assets/admin-panel.png",
        "../assets/alumnos.panel.png",
        "../assets/profesor-panel.png"
        // aquí luego pondrás: login, panel admin, alumno, profesor, etc.
      ]
    },
    {
      id: "mesas",
      nombre: "Gestor de Mesas",
      descripcion:
        "Control visual de mesas, pedidos y estados para tu restaurante.",
      link: "#",
      cover:
        "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1200",
      imagenes: [
        "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/941864/pexels-photo-941864.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ]
    },
    {
      id: "sitios",
      nombre: "Sitios Institucionales",
      descripcion:
        "Páginas web para colegios, escuelas técnicas e instituciones educativas.",
      link: "#",
      cover:
        "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200",
      imagenes: [
        "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/2706379/pexels-photo-2706379.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ]
    }
  ];

  // ============================
  // REFERENCIAS AL DOM
  // ============================
  const mainImg = document.getElementById("system-main-img");
  const mainTitle = document.getElementById("system-title");
  const mainDesc = document.getElementById("system-desc");
  const mainLink = document.getElementById("system-link");
  const dotsContainer = document.getElementById("system-dots");
  const thumbsContainer = document.getElementById("system-thumbs");

  let currentSystemIndex = 0;
  let currentImageIndex = 0;
  let autoTimer = null;

  // ============================
  // RENDER THUMBS (SISTEMAS)
  // ============================
  function renderThumbs() {
    thumbsContainer.innerHTML = "";
    systemsData.forEach((system, index) => {
      const thumb = document.createElement("div");
      thumb.className =
        "system-thumb" + (index === currentSystemIndex ? " active" : "");
      thumb.dataset.index = index;

      thumb.innerHTML = `
        <img src="${system.cover}" alt="${system.nombre}">
        <span class="system-thumb-label">${system.nombre}</span>
      `;

      thumb.addEventListener("click", () => {
        currentSystemIndex = index;
        currentImageIndex = 0;
        renderMain();
        renderThumbs();
        resetAutoTimer();
      });

      thumbsContainer.appendChild(thumb);
    });
  }

  // ============================
  // RENDER BLOQUE PRINCIPAL
  // ============================
  function renderMain() {
    const system = systemsData[currentSystemIndex];
    const images = system.imagenes;
    const imgSrc = images[currentImageIndex] || system.cover;

    mainImg.src = imgSrc;
    mainTitle.textContent = system.nombre;
    mainDesc.textContent = system.descripcion;
    mainLink.href = system.link || "#";

    // Dots
    dotsContainer.innerHTML = "";
    images.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.className =
        "system-dot" + (index === currentImageIndex ? " active" : "");
      dot.addEventListener("click", () => {
        currentImageIndex = index;
        renderMain();
        resetAutoTimer();
      });
      dotsContainer.appendChild(dot);
    });
  }

  // ============================
  // AUTOROTACIÓN
  // ============================
  function nextSlide() {
    const system = systemsData[currentSystemIndex];
    const totalImages = system.imagenes.length;

    currentImageIndex++;
    if (currentImageIndex >= totalImages) {
      currentImageIndex = 0;
      currentSystemIndex =
        (currentSystemIndex + 1) % systemsData.length; // pasa al siguiente sistema
      renderThumbs();
    }
    renderMain();
  }

  function resetAutoTimer() {
    if (autoTimer) clearInterval(autoTimer);
    autoTimer = setInterval(nextSlide, 6000); // 6 segundos
  }

  // ============================
  // INIT
  // ============================
  renderThumbs();
  renderMain();
  resetAutoTimer();

