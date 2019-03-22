//ES5 syntax
function Person5(name, lastname, birthYear){
    this.name = name;
    this.lastname = lastname;
    this.birthYear = birthYear;
}

Person5.prototype.calculateAge = function(){
    return new Date().getFullYear - this.birthYear;
};

var person5 = new Person5("name", "lastname", 22);
//ES6 syntax
class Person6{
    constructor(name, lastname, birthYear){
        this.name = name;
        this.lastname = lastname;
        this.birthYear = birthYear;
    }

    calculateAge(){
        return new Date().getFullYear - this.birthYear;
    }

    static greeting(){
        console.log("Hello");
    }
}

var person6 = new Person6("name", "lastname", 22);
Person6.greeting();

