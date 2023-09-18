// 선택자 잡는 방법
// document.querySelector('.box2') 를 축약함.
// $('.box2')

// 클릭했을때 나오고, 한번 더 클릭 시 없어지는 버튼 이벤트 만들기
$(function(){
    $(".menu_btn").on("click", function() {
        $(".menu_btn").toggleClass("active");
        $(".popupMenu").stop().fadeToggle();
    });
});

