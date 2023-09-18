// $(function (){
//     $('#imgSlider').slick({
//         // 스트립트에서 1000초가 1초, 300은 0.3초
//         speed:300,
//         dots: false,
//         arrows:true,
//         prevArrow:$('#prevBtn'),
//         nextArrow:$('#nextBtn'),
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll:6,
//         centerMode: false
//     });
// });

$(function () {
    $('#test').slick({
        dots: true,
        arrows: true,

        prevArrow: $('#prevBtn'),
        nextArrow: $('#nextBtn'),
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
    });
});