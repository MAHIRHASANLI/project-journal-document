$('.owl-carousel').owlCarousel({
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
        },

    }
})
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [6000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})