// html에 자바스크립트를 링크했으면 이걸 넣어줘야함.
$(function () {


    $(".wrap div").on("click", function (){
        $(this).addClass("gold");
        $(this).prevAll().addClass("gold");
        $(this).nextAll().removeClass("gold");

        console.log( $(this).hasClass('box1') );

        // $(this) = 클릭한 거
        // ( $(this).hasClass('box1') ) = 클릭한 거에 box1이 들어있다
        // if ( $(this).hasClass('box1') ) {$(".print").html() }
        // = 위에 조건이 맞다면 html 있는 .print 창에 이걸 출력해

        // if ( $(this).hasClass('box1') ) {
        //     $(".print").html(`아주 별로에요 <img src="images/star-lv1.png" alt="">`);
        // } else if ( $(this).hasClass('box2') ) {
        //     $(".print").html(`별로에요 <img src="images/star-lv2.png" alt="">`);
        // } else if ( $(this).hasClass('box3') ) {
        //     $(".print").html(`보통이에요 <img src="images/star-lv3.png" alt="">`);
        // } else if ( $(this).hasClass('box4') ) {
        //     $(".print").html(`만족해요 <img src="images/star-lv4.png" alt="">`);
        // } else {
        //         $(".print").html(`아주 만족해요 <img src="images/star-lv5.png" alt="">`);
        // }

        //if문 switch 문으로 바꾸기
        const check = $(this).attr('class');
        console.log(check);
        const print = $('.print')

        switch (check){
            case "box1 gold" :
                print.html(`아주 별로에요 <img src="images/star-lv1.png" alt="">`);
                break;
            case "box2 gold" :
                print.html(`별로에요 <img src="images/star-lv2.png" alt="">`);
                break;
            case "box3 gold" :
                print.html(`보통이에요 <img src="images/star-lv3.png" alt="">`);
                break;
            case "box4 gold" :
                print.html(`좋아요 <img src="images/star-lv4.png" alt="">`);
                break;
            default :
                print.html(`아주 좋아요 <img src="images/star-lv5.png" alt="">`);
                break;
        }
    });
});



