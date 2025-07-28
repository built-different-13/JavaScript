// Variable Scope
var scope = "Shriram Rai";
console.log(scope);

// Function Scope
function scopeDemo() {
    var i = 10;
    console.log(i);
}

scopeDemo();

// Difference between Global and Function Scope
var madam = "Dhara Periwal";

function scopeDemo1() {
    var madam = "Madam Ji";
    console.log(madam);
}

scopeDemo1();
console.log(madam);

// Call Stack Execution
function c() {
    console.log("Inside c");
}

function b() {
    c();
    console.log("Inside b");
}

function a() {
    b();
    console.log("Inside a");
}

a();