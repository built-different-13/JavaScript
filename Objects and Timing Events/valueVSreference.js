function f(a,b,c) {
    a=3;
    b.push("bob");
    c.first=false;
}

var x = 4;
var y = ["raj", "rahul"];
var z = {first:true};

f(x,y,z);
console.log(x,y,z);