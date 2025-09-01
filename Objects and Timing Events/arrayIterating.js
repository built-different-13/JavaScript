var arr = [20,30,40,50];

var obj = {
    "0":20,
    "1":30,
    "2":40,
    "3":50
};

console.log(arr);

for (var i in obj) {
    console.log(i, obj[i]);
}

obj.prop = "demo";
for(var prop in obj) {
    console.log(prop, obj[prop]);
}

arr.prop = "demo";
console.log(arr);
console.log(arr.length);

for (var i in arr) {
    console.log(i);
}