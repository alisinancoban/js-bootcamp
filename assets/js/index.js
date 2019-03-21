//ES5 syntax
function es5(limit){
    //it is not a array
    var arr5 = Array.prototype.slice.call(arguments, 1); //for expect limit

    arr5.forEach(function(current){
        console.log(current);
    });
}

//ES6 syntax
function es6(limit, ...parameters){
    parameters.forEach(element => console.log(element));
}