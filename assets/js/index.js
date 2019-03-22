//ES5 syntax
function Person5(name, lastname, birthYear){
    this.name = name;
    this.lastname = lastname;
    this.birthYear = birthYear;
}

Person5.prototype.calculateAge = function(){
    return new Date().getFullYear() - this.birthYear;
};

var person5 = new Person5("name", "lastname", 22);

var Engineer5 = function(name, lastname, birthYear, job){
    Person5.call(this, name, lastname, birthYear);
    this.job = job;
};
//Inheritance is here
Engineer5.prototype = Object.create(Person5.prototype);
//Person can not access
Engineer5.prototype.solveProblem = function(){console.log("Problem solved");}
var engineer5 = new Engineer5("name", "lastname", 1995, "software eng.");
engineer5.calculateAge();

//ES6 syntax
class Person6{
    constructor(name, lastname, birthYear){
        this.name = name;
        this.lastname = lastname;
        this.birthYear = birthYear;
    }

    calculateAge(){
        return new Date().getFullYear() - this.birthYear;
    }

    static greeting(){
        console.log("Hello");
    }
}

var person6 = new Person6("name", "lastname", 22);
Person6.greeting();

class Engineer6 extends Person6{
    constructor(name, lastname, birthYear, job){
        super(name, lastname, birthYear);
        this.job = job;
    }

    solveProblem(){
        console.log("Problem solved");
    }
}

const engineer6 = new Engineer6("name", "lastname", 1995, "software eng.");
engineer6.calculateAge();

