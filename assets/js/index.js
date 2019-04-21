for (var i=1; i<=5; i++) {
    setTimeout( function timer(){
    console.log( i );
    }, i*1000 );
   }

/*IIFE creates scope by declaring a
   function and immediately executing it.
   Let’s try: */
   for (var i=1; i<=5; i++) {
    (function(){
    setTimeout( function timer(){
    console.log( i );
    }, i*1000 );
    })();
   }
   
/*It’s not enough to have a scope to close over if that scope is empty. Look
closely. Our IIFE is just an empty do-nothing scope. It needs some‐
thing in it to be useful to us.
It needs its own variable, with a copy of the i value at each iteration. */
   for (var i=1; i<=5; i++) {
    (function(j){
    setTimeout( function timer(){
    console.log( j );
    }, j*1000 );
    })( i );
   }

/*Look carefully at our analysis of the previous solution. We used an
IIFE to create new scope per-iteration. In other words, we actually
needed a per-iteration block scope let declaration hijacks a 
block and declares a variable right there in the block.
It essentially turns a block into a scope that we can close over. So, the
following awesome code just works: */
   for (let i=1; i<=5; i++) {
    setTimeout( function timer(){
    console.log( i );
    }, i*1000 );
   }

   