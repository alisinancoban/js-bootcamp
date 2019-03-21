//ES5 syntax
function Person(firstname, lastname, birthyear){
    lastname === undefined ? lastname = "Noname" : lastname = lastname;
    birthyear === undefined ? birthyear = 1753 : birthyear = birthyear;

    this.firstname = firstname;
    this.lastname = lastname;
    this.birthyear = birthyear;
}

//ES6 syntax
function Person(firstname, lastname = "Noname", birthyear = 1753){
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthyear = birthyear;
}

var person = new Person("Sinan");