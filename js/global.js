const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerIcons = document.querySelector(".hamburger-btn")
const navbar = document.querySelector("#navbar");
const navMobile = document.querySelector(".nav-mobile")
const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".search-icon");
let backToTop = document.getElementById("backToTop");

searchIcon.addEventListener("click", () => {
    console.log("dd");
    searchInput.style.width = "250px"
    searchInput.focus();
})

// Hamburger Menu
hamburgerMenu.addEventListener("click", () => {
    if (hamburgerIcons.className.includes("fa-bars")) {
        hamburgerIcons.classList.remove("fa-bars");
        hamburgerIcons.classList.add("fa-x");
        navMobile.style.top = "60px"
        navMobile.style.boxShadow = "rgba(0, 0, 0, 0.45) 0px 250px 250px -20px";
    }
    else {
        hamburgerIcons.classList.add("fa-bars");
        hamburgerIcons.classList.remove("fa-x");
        navMobile.style.top = "-550px";
        navMobile.style.boxShadow = "none"
    }
})


// backToTop
backToTop.addEventListener('click', () => {
    var body = $("html, body");
    body.stop().animate({ scrollTop: 0 }, 500, 'swing', { behavior: 'smooth' });
})