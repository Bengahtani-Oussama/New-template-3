const navmenu = document.getElementById("nav-menu");
const close = document.getElementById("close-btn");
const nav = document.getElementById("navbar");

if (navmenu) {
  navmenu.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
