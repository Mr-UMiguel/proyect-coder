const navToggle = document.querySelector(".nav-toggle")
const navUl = document.querySelector(".navigationbar-ul")

navToggle.addEventListener("click", ()=> {
    navUl.classList.toggle("navigationbar-ul_visible");

    if (navMenu.classList.contains("nav-menu_visible")){
        navToggle.setAttribute("aria-label","Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label","Abrir menú")
    }
});

const dropdownToggleFinanciamiento = document.querySelector(".dropdown-toggle-financiamiento");
const dropdownFinanciamientoContent = document.querySelector(".dropdown-financiamiento-content");
const dropdownToggleTiendas = document.querySelector(".dropdown-toggle-tiendas");
const dropdownTiendasContent = document.querySelector(".dropdown-tiendas-content");

dropdownToggleFinanciamiento.addEventListener("click", ()=> {
    dropdownFinanciamientoContent.classList.toggle("dropdown-financiamiento-content_visible");
});



dropdownToggleTiendas.addEventListener("click", ()=> {
    dropdownTiendasContent.classList.toggle("dropdown-tiendas-content_visible");
});