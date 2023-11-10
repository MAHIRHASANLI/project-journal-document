const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerIcons = document.querySelector(".hamburger-btn")

hamburgerMenu.addEventListener("click", () => {
    if (hamburgerIcons.className.includes("fa-bars")) {
        hamburgerIcons.classList.remove("fa-bars");
        hamburgerIcons.classList.add("fa-x");
    }
    else {
        hamburgerIcons.classList.add("fa-bars");
        hamburgerIcons.classList.remove("fa-x");
    }
    // else if (hamburgerIcons.classList === "fa-bars") hamburgerIcons.classList.add("fa-x");
})

const searchInput = document.getElementById("search-input");
const searchIcon = document.getElementById("search-icon");
const searchDiv = document.getElementsByClassName("header-search-div");
const pagesLink = document.getElementsByClassName("pages-link");

searchIcon.addEventListener("click", () => {
    // searchDiv.classList("header-search")
    // searchDiv.style.width = "350px";
    // searchDiv.style.height = "45px";
    // searchDiv.style.padding = "10px 30px";
    searchInput.style.width = "250px"
    searchInput.focus();
})