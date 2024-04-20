const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");
const closeBtn = document.getElementById("close-btn");
const featuresBtn = document.getElementById("features-btn");
const featuresUl= document.querySelector(".features-ul");
const companyBtn = document.getElementById("company-btn");
const companyUl = document.querySelector(".company-ul");


menuBtn.onclick = () =>
  (navbar.style.display = navbar.style.display == "none" ? "block" : "none");
closeBtn.onclick = () => (navbar.style.display = "none");

featuresBtn.onclick = () =>
  (featuresUl.style.display = featuresUl.style.display == "none" ? "block" : "none");

companyBtn.onclick=()=>
(companyUl.style.display = companyUl.style.display == "none" ? "block" : "none");