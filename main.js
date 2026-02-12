const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const modalList = document.getElementById("modal-list");
const closeBtn = document.querySelector(".modal__close");
const modalBtn = document.querySelector(".modal__btn");

const modalData = {
  especialistas: {
    title: "🐶 Especialistas em Pets",
    text: "Nossa equipe é formada por veterinários experientes e apaixonados por animais.",
    list: [
      "Consultas clínicas",
      "Acompanhamento veterinário",
      "Atendimento humanizado",
      "Equipamentos modernos",
    ],
  },
  servicos: {
    title: "🩺 Nossos Serviços",
    text: "Oferecemos uma ampla gama de serviços para cuidar da saúde do seu pet.",
    list: [
      "Vacinação",
      "Banho e tosa",
      "Exames laboratoriais",
      "Emergência 24h",
      "Cirurgias simples",
    ],
  },
  contato: {
    title: "📞 Entre em contato",
    text: "Estamos prontos para cuidar do seu pet com carinho e dedicação.",
    list: [
      "WhatsApp: (11) 99999-9999",
      "Email: contato@petshop.com",
      "Horário: 08h às 18h",
      "Endereço: São Paulo - SP",
    ],
  },
};

document.querySelectorAll(".open-modal").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const type = button.dataset.modal;

    modalTitle.textContent = modalData[type].title;
    modalText.textContent = modalData[type].text;

    modalList.innerHTML = "";
    modalData[type].list.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = "✔️ " + item;
      modalList.appendChild(li);
    });

    modal.classList.add("active");
  });
});

function closeModal() {
  modal.classList.remove("active");
}

closeBtn.addEventListener("click", closeModal);
modalBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

const scrollRevealOption = {
  distance: "60px",
  origin: "bottom",
  duration: 1000,
  easing: "ease-out",
  opacity: 0,
  scale: 0.95,
  reset: false, 
  viewFactor: 0.2,
};

ScrollReveal().reveal(".header__content h4", {
  ...scrollRevealOption,
  delay: 200,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 400,
  scale: 1.05,
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 600,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 800,
});
ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 1000,
  origin: "top",
});

ScrollReveal().reveal(".intro__card", {
  ...scrollRevealOption,
  interval: 200,
  origin: "bottom",
  scale: 0.9,
});

ScrollReveal().reveal(
  ".about__row:nth-child(3) .about__image img, .about__row:nth-child(5) .about__image img",
  {
    ...scrollRevealOption,
    origin: "left",
  },
);
ScrollReveal().reveal(".about__row:nth-child(4) .about__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".about__content span", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content h4", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".product__card", {
  ...scrollRevealOption,
  interval: 200,
  scale: 0.9,
  origin: "bottom",
});

ScrollReveal().reveal(".service__card", {
  duration: 1000,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 20,
  breakpoints: {
    0: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

ScrollReveal().reveal(".instagram__grid img", {
  duration: 1000,
  interval: 500,
});
