$(function (){
    $('#test').slick({
        // 스트립트에서 1000초가 1초, 300은 0.3초
        speed:300,
        dots: false,
        arrows:true,
        prevArrow:$('#imgSlider_prev'),
        nextArrow:$('#imgSlider_next'),
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
    });
});