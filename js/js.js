/* smooth transition from nav */

$('.js-aboutus').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.about_us').offset().top
    })
})

$('.js-projects').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.projects').offset().top
    }, 700)
})


$('.js-contact').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.contact').offset().top
    }, 800)
})

