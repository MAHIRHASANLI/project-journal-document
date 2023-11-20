// latest-articles-carousel
$('.latest-articles-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
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


////
$('.article-headings-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 4
        },
        1000: {
            items: 5
        },
        1400: {
            items: 6
        }
    }
})

$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [500000])
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

