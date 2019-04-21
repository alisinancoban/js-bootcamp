var a = 3;

function foo() {
    var a = 2;
    function bar() {
    console.log( a );
    }
    return bar;
   }
   var baz = foo();
   baz(); // 2 -- Whoa, closure was just observed, man.

/*    The function bar() has lexical scope access to the inner scope of
foo(). But then, we take bar(), the function itself, and pass it as a
value. In this case, we return the function object itself that bar refer‐
ences.
After we execute foo(), we assign the value it returned (our inner
bar() function) to a variable called baz, and then we actually invoke
baz(), which of course is invoking our inner function bar(), just by
a different identifier reference.
bar() is executed, for sure. But in this case, it’s executed outside of its
declared lexical scope.
After foo() executed, normally we would expect that the entirety of
the inner scope of foo() would go away, because we know that the
Nitty Gritty | 49
engine employs a garbage collector that comes along and frees up
memory once it’s no longer in use. Since it would appear that the con‐
tents of foo() are no longer in use, it would seem natural that they
should be considered gone.
But the “magic” of closures does not let this happen. That inner scope
is in fact still in use, and thus does not go away. Who’s using it? The
function bar() itself.
By virtue of where it was declared, bar() has a lexical scope closure
over that inner scope of foo(), which keeps that scope alive for bar()
to reference at any later time.
bar() still has a reference to that scope, and that reference is called
closure. */