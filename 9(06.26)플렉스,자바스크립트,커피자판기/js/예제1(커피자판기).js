$(function () {
    // 변수가 계속 바뀌기 때문에 let을 써줌
    let totalPrice = 0;

    function showMessage(price){
        const message = `${price}원 넣었습니다`;
        alert(message);
    }

    $(".coin500").on("click", function () {
        totalPrice = totalPrice + 500;
        showMessage(totalPrice);
    });

    $(".coin1000").on("click", function () {
        totalPrice = totalPrice + 1000;
        showMessage(totalPrice);
    });

    $(".coin5000").on("click", function () {
        totalPrice = totalPrice + 5000;
        showMessage(totalPrice);
    });

    $("#selected").on("click", function () {
        if (totalPrice >= 3000) {
            alert("아메리카노 선택 가능");
        } else if (totalPrice >= 4000) {
            alert("아메리카노, 카페라떼 선택 가능");
        } else if (totalPrice >= 5000) {
            alert("전체 음료 선택 가능");
        } else {
            alert("선택 가능한 음료가 없습니다.");
        }
    });
});


