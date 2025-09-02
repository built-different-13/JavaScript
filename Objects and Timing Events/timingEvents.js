// setTimeout
function sayHello() {
    console.log("Unicorn Startup");
}

setTimeout(sayHello,1000);

// setInterval
function startup() {
    console.log("1 Billion USD Startup");
}

setInterval(startup,2000);

// Timer
var sec = 1;

function demo() {
    console.log("after ", sec);
    sec++;
}

setInterval(demo,1000);

var sec = 1;

function demo() {
    console.log("after ", sec);
    sec++;
    if(sec==6) {
        clearInterval(id);
    }
}

var id = setInterval(demo,1000);