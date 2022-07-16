
var minus = document.getElementById("minus");
var counter = document.getElementById("counter");
var plus = document.getElementById("plus");
var count = 0 ; 

numberCounter();

minus.addEventListener("click",()=> {
count --;
numberCounter();

});

plus.addEventListener("click", ()=>{
    count ++;
    numberCounter();
});

function numberCounter() {
    counter.innerText = count ;

}
   

