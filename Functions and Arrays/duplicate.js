var arr = [1,2,3];

function duplicate(arr) {
    var len = arr.length;
    for (var i=0; i<len; ++i) {
        arr.push(arr[i]);
    }
    return arr;
}


var arr1 = duplicate(arr);

for (var j=0; j<arr1.length; ++j) {
    console.log(arr1[j]);
}