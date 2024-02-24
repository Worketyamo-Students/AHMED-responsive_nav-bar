const menu = document.querySelector(".menu")
const navlinks = document.querySelector(".nav_links")

menu.addEventListener("click", ()=>{
    navlinks.classList.toggle("mobile-menu")
})