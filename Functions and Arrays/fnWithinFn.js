// Example-1
function outer() {
    var outerVar = 10;
    function inner() {
        console.log(outerVar);
    }
    inner();
}

outer();

// Example-2
var name="global";

function outer1() {
    var name = "outer";
    function inner1() {
        var name = "inner";
        console.log(name);
    }
    inner1();
    console.log(name);
}

outer1();
console.log(name);