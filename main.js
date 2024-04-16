const menuBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');
const closeBtn = document.getElementById('close-btn');

menuBtn.addEventListener("click", () => {
    navbar.style.display = "block";
    menuBtn.style.display = "none";
    closeBtn.style.display = "block";
    
});
     
 