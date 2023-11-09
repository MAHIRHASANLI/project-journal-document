// console.log("Hello world");
// const navLink = document.getElementsByClassName("nav-link");



// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {
//     if (document.body.scrollTop < 100 || document.documentElement.scrollTop < 100) {
//         document.getElementById("navbar").style.top = "0px";
//     }
//     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//         document.getElementById("navbar").style.top = "0px";
//     }
//     // else if (document.body.scrollTop === 0 || document.documentElement.scrollTop === 0) document.getElementById("navbar").style.top = "0px"
//     else {
//         document.getElementById("navbar").style.top = "-1000px";
//     }
// }
const searchInput = document.getElementById("search-input");
const searchIcon = document.getElementById("search-icon");
const searchDiv = document.getElementsByClassName("header-search-div");

searchIcon.addEventListener("click", () => {
    // searchDiv.classList("header-search")
    searchDiv.style.width = "350px";
    searchDiv.style.height = "45px";
    searchDiv.style.padding = "10px 30px";
    searchDiv.style.border = "1px solid #b9b9b9";
    // searchInput.style.display = "block"
})

/* ///////////// */

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})