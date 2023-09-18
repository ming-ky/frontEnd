$(function (){
    let counter = 0;
    $(".prev").on("click",function (){
        counter--;
        $(".box").eq(counter).removeClass("active");
    });


    $(".next").on("click",function (){
        $(".box").eq(counter).addClass("active");
        counter++;

    });

});