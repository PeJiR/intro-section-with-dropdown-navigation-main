const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");
const closeBtn = document.getElementById("close-btn");

menuBtn.onclick = () =>
  (navbar.style.display = navbar.style.display == "none" ? "block" : "none");
closeBtn.onclick = () => (navbar.style.display = "none");


