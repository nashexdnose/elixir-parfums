// LOADER
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 500);
  }, 1500);
});

// MENU MOVIL
const toggle = document.getElementById("menuToggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// SCROLL ANIMATION
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

