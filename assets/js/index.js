var a = 2;

(function IIFE( global ){
 var a = 3;
 console.log( a ); // 3
 console.log( global.a ); // 2
})( window );

console.log( a ); // 2

var a = 2;

(function IIFE( def ){
 def( window );
})(function def( global ){
 var a = 3;
 console.log( a ); // 3
 console.log( global.a ); // 2
});


//Hoisting
foo();
function foo() {
 console.log( a ); // undefined
 var a = 2;
}

   