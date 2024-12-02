// Fail: burger.js
// Autor: Web Dev Tutorials
// Kuupäev: 02.12.2024
// Aktiveerib hamburgeri ikooni linkide listi ja lingi peale vajutades kaotab hüpik akna ära.
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))