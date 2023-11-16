const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerIcons = document.querySelector(".hamburger-btn")
const navbar = document.querySelector("#navbar");
const navMobile = document.querySelector(".nav-mobile")
const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".search-icon");

// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {
//     if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
//         navbar.style.position = "sticky";
//         navbar.style.top = "0";
//         navbar.style.transition = "1s linear"
//     }
//     else navbar.style.position = "relative";
// }



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
