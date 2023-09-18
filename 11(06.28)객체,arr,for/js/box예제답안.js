//바닐라 자바스크립트 로딩
// window.addEventListener("load",function (){});


 const boxes = document.querySelectorAll(".box");
 const buttons = document.querySelectorAll(".btnWrap");

 // buttons[0].addEventListener("click",function (){});
 // buttons[1].addEventListener("click",function (){});
 //
 // for(let i = 0; i < buttons.length; i++){
 //     buttons[i].addEventListener("click",function (){
 //
 //     });
 // }

let counter = 0;
let hasCounter = 0;

function clickButtonHandler(type){
    return function (){
        if (type === "prev"){
            if(counter){
                counter--;
            }else {
                counter = boxes.length - 1;
            }
            boxes[hasCounter].classList.remove("active");
            boxes[counter].classList.add("active");
            hasCounter = counter;
        }else {
            if(counter< boxes.length -1){
                counter++
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