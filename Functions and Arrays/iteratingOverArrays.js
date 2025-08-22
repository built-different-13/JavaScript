// Method - 1
var arr1 = [1,2,3,4,5,6,7];

for (var i=0; i<arr1.length; ++i) {
    console.log(arr1[i]);
}

// Method - 2
var arr2 = [1,2,3,4,5,6,7];

function print(element) {
    console.log(element);
}

arr2.forEach(print);