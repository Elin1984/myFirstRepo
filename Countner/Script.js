
// document.getElementById("title").innerHTML = "laaa laaa laaa";
// document.getElementById("under-title").classList.add("blue");

// function sayImIn(){
//     console.log("I'M IN");
// }

// function sayImOut(){
//     console.log("I'M OUT");
// }

// document.getElementById("title").addEventListener("mouseenter",sayImIn);
// document.getElementById("title").addEventListener("mouseleave",sayImOut);

let counter = 1 ;

function ChangeUnderTitle(){
    document.getElementById("under-title").innerHTML = "Got click" + counter;
    counter++
}

document.getElementById("under-title")
.addEventListener("click",ChangeUnderTitle);













