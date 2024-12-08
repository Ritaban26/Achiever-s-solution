const menuBtn = document.querySelector(".mobile_menu_btn");
const menu = document.querySelector(".menu");
menuBtn.addEventListener("click", toggleMobileMenu);
console.log(menu);

function toggleMobileMenu() {
  menu.classList.toggle("display_menu");
}
