var arr = [1,2,3,4,5];

function rotateLeft(arr) {
    var temp = arr[0];
    arr.shift();
    arr.push(temp);
    return arr;
}

var arr1 = rotateLeft(arr);
for (var i=0; i<arr1.length; ++i) {
    console.log(arr1[i]);
}