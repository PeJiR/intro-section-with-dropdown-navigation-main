const menuBtn = document.getElementById("menu-btn");
const navBar = document.getElementById("navbar");
const closeBtn = document.getElementById("close-btn");
const featuresBtn = document.getElementById("features-btn");
const featuresUl = document.querySelector(".features-ul");
const companyBtn = document.getElementById("company-btn");
const companyUl = document.querySelector(".company-ul");
const featuresBtnArrow = document.getElementById("features-btn-arrow");
const companyBtnArrow = document.getElementById("company-btn-arrow");

menuBtn.addEventListener("click", () => {
  navBar.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  const screenSize = window.innerWidth;
  if (screenSize >= 768) {
    navBar.style.display = "block";
  } else {
    navBar.style.display = "none";
  }
});
// Event listener for window resize to handle navbar visibility on screen size change
window.addEventListener("resize", () => {
  const screenSize = window.innerWidth;
  if (screenSize >= 768) {
    navBar.style.display = "block"; // Ensure navbar is visible on large screens
  }
});

featuresBtn.addEventListener("click", () => {
  featuresUl.style.display =
    featuresUl.style.display === "block" ? "none" : "block";

  featuresBtnArrow.style.transform =
    featuresBtnArrow.style.transform === "rotate(-90deg)"
      ? "rotate(0deg)"
      : "rotate(-90deg)";
  featuresBtnArrow.style.transition = "transform 0.3s ease-in-out";
});

companyBtn.addEventListener("click", () => {
  companyUl.style.display =
    companyUl.style.display === "block" ? "none" : "block";
  companyBtnArrow.style.transform =
    companyBtnArrow.style.transform === "rotate(-90deg)"
      ? "rotate(0deg)"
      : "rotate(-90deg)";
  companyBtnArrow.style.transition = "transform 0.3s ease-in-out";
});
