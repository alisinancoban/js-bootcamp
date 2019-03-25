var a = 33;
function foo(a) {
    window.a = 3;
    console.log(a);
   }
foo(2);
console.log(a);


