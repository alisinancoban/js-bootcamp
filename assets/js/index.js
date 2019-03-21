let firstName = "sinan";
let lastname = "coban";

function calculateAge(year){
    return 2019 - year;
}

//ES5 syntax 
console.log("I am " + firstName + " " +  lastname);

//ES6 syntax
console.log(`I am ${firstName} ${lastname} ${calculateAge(1995)}`);