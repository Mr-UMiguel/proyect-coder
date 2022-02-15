const navToggle = document.querySelector(".nav-toggle")
const navUl = document.querySelector(".navbar-ul")

navToggle.addEventListener("click", ()=> {
    navUl.classList.toggle("navbar-ul_visible");

    if (navMenu.classList.contains("nav-menu_visible")){
        navToggle.setAttribute("aria-label","Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label","Abrir menú")
    }
});