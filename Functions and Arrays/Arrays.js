var arr1 = [1,2,3,4];
console.log(arr1);

var arr2 = new Array(1,2,3,4,5);
console.log(arr2);

console.log(arr1[2]);
console.log(arr2[2]);
console.log(arr1[5]);
console.log(arr2[5]);

arr1[2]=90;
arr2[2]=90;

console.log(arr1);
console.log(arr2);

arr1[5]=100;
console.log(arr1);
console.log(arr1.length);

var arr3 = new Array();
console.log(arr3);

var arr4 = new Array(2);
console.log(arr4);