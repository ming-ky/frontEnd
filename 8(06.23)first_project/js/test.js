
$(function () {
    $('#image_swiper').slick({
        slide: 'div',
        autoplay: true,
        autoplaySpeed:1000,
        dots: true,
        arrows: true,
        speed:300,
        prevArrow: $('#prevBtn'),
        nextArrow: $('#nextBtn'),
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
    });
})

