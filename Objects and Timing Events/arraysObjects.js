var arr = [20,30,40,50];
console.log(arr);

var obj = {
  "0":20,
  "1":30,
  "2":40,
  "3":50
};

for (var i in obj) {
    console.log(i, obj[i]);
}