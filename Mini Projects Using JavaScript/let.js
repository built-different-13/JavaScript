// Concept - 1 (Scope concept)
var a = 10;

if(a<=10) {
    var b = 40;
} else {
    var c = 50;
}

console.log(a,b,c);

var d = 10;

if(d<=10) {
    let e = 60;
} else {
    let f = 70;
}

console.log(d,e,f);

// Concept - 2 (Hoisted concept)
console.log(g);
var g = 80;

if(g<=80) {
    console.log(h);
    let h = 90;
}