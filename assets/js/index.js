const numbers = [1,2,3,4,5];

//ES5 syntax
var es5 = numbers.map(function(current){
   return current; 
});

//ES6 syntax
var es6 = numbers.map(current => current);
var es6 = numbers.map((current, index) => {
    return `${current} index is ${index}`;
});

// ------------------- Arrow function 2 this -----------------
var es5 = {
    color: "green",
    position: 1,
    click: function(){
        var self = this;//if you can`t do that this refers to the global object
        document.querySelector(".green").addEventListener("click", function(){
            alert(self.color + self.position);
        });
    }
};

var es6 = {
    color: "green",
    position: 1,
    click: function(){
        document.querySelector(".green").addEventListener("click", () => {
            alert(this.color + this.position);
        });
    }
};

