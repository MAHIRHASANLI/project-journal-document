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


/* ///////////// */

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [5000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})



// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//       mybutton.style.display = "block";
//     } else {
//       mybutton.style.display = "none";
//     }
//   }
let backToTop = document.getElementById("backToTop");
backToTop.addEventListener('click', () => {
    var body = $("html, body");
    body.stop().animate({ scrollTop: 0 }, 500, 'swing',{behavior: 'smooth'});
})
