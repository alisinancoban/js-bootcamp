//Closure
function makeAdder(value){
    //inner function add() uses `value` so it has a closure over it
    function add(number){
        return number + value;
    };
    return add;
}

var plusOne = makeAdder(1);
var plusTen = makeAdder(10);

console.log(plusOne(3)); // 4
console.log(plusTen(3)); // 13


function User(){
    var username, password;

    function doLogin(user, pw){
        username = user;
        password = pw;

        if(user === "sinan" && pw === "123"){
            console.log("corrent")
        }
        else{
            console.log("false");
        }
    }
    
    var publicAPI = {
        login: doLogin
    };

    return publicAPI;
}

var fred = User();
fred.login("sinan", "1233");