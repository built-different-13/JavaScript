// Variable Hoisting Example - 1
function hoistDemo() {
    console.log(i);
    var i = 10;
}

hoistDemo();

// Variable Hoisting Example - 2
console.log(j);

var j = 10;

// Function Hoisting Example
hoistingDemo();

function hoistingDemo() {
    console.log(i);
    var i = 20;
}