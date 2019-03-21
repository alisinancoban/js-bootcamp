const boxes = document.querySelectorAll(".boxes");

//ES5 syntax
var arr5 = Array.prototype.slice.call(boxes);
arr5.forEach(function(current){
    current.style.backgroundColor = "blue";
});

var arr6 = Array.from(boxes);
arr6.forEach(current => current.style.backgroundColor = "blue");

//-------------- for of loop ---------------
for(const current of arr6){
    current.style.backgroundColor = "blue";
}