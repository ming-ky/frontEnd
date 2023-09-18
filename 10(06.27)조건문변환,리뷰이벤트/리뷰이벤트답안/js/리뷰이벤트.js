const starInfo = [
    {
        message: "아주 별로에요",
        imgSrc: "images/star-lv1.png"
    },
    {
        message: "별로에요",
        imgSrc: "images/star-lv2.png"
    },
    {
        message: "보통이에요",
        imgSrc: "images/star-lv3.png"
    },
    {
        message: "좋아요",
        imgSrc: "images/star-lv4.png"
    },
    {
        message: "아주 좋아요",
        imgSrc: "images/star-lv5.png"
    }
];

const stars = document.querySelectorAll(".fa-star");
const print = document.querySelector('.print');

function checkStar(index) {
    for (let i = 0; i < stars.length; i++) {
        if (i <= index) {
            stars[i].classList.add("yellow");
        } else {
            stars[i].classList.remove("yellow");
        }
    }
}
function printMessage( { message, imgSrc} ) {
    print.innerHTML = `${message} <img src="${imgSrc}" alt="">`;
}

for (let i = 0; i < stars.length; i++) {
    // 실행문
    stars[i].addEventListener("click",  () => {
        checkStar(i);
        printMessage(starInfo[i]);
    });
}