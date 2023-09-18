let [counter,hasCounter]=[0,0];

if(!counter){
    $(".box").eq(counter).addClass("active");
}

function changeColor(beforeNum, currentNum){
    $(".box").eq(currentNum).addClass("active");
    $(".box").eq(beforeNum).removeClass("active");
}


$(".prev").on("click",function (){
    if(counter){
        counter--;
    }else {
        counter = 3;
    }
   changeColor(hasCounter, counter);
    hasCounter = counter;
});

$(".next").on("click",function (){
    if (counter < 3){
        counter++;
    } else {
        counter = 0;
    }
    changeColor(hasCounter, counter);
    hasCounter = counter;
});
