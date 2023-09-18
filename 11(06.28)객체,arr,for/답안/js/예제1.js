// 바닐라 자바스크립트 로딩
// window.addEventListener("load", function () {
//
// });


const boxes = document.querySelectorAll(".box");
const buttons = document.querySelectorAll(".btnWrap button");
let counter = 0;
let hasCounter = 0;

if (!counter) {
    boxes[counter].classList.add("active");
}
function clickButtonHandler(type) {
    return function () {
        if (type === "prev") {
            if (counter) {
                counter--;
            } else {
                counter = boxes.length - 1;
            }
            boxes[hasCounter].classList.remove("active");
            boxes[counter].classList.add("active");
            hasCounter = counter;
        } else {
            if (counter < boxes.length - 1) {
                counter++;
            } else {
                counter = 0;
            }
            boxes[hasCounter].classList.remove("active");
            boxes[counter].classList.add("active");
            hasCounter = counter;
        }
    }
}



buttons.forEach(function (item) {
    item.addEventListener("click", clickButtonHandler(item.dataset.btn));
});

