// Deep Copy of Primitive Values
var a = 4;
var b = a;
var c = a;
console.log(c);
c = 10;
console.log(c);
console.log(a);

// Shallow Copy of Objects
var shriram = {
   name: "Shriram Rai",
   age: 23,
   wife: "Dhara Periwal"
};

var dhara = shriram;

console.log(shriram);
console.log(dhara);

dhara.name = "Dhara Periwal";
dhara.wife = "Shriram Rai";

console.log(shriram);
console.log(dhara);

// Deep Copy of Objects
var shriram = {
    name: "Shriram Rai",
    age: 23,
    wife: "Dhara Periwal"
};

var dhara = {...shriram};

console.log(shriram);
console.log(dhara);

dhara.name = "Dhara Periwal";

console.log(shriram);
console.log(dhara);

// Deep Copy of Objects
var shriram = {
    name: "Shriram Rai",
    age: 23,
    wife: "Dhara Periwal"
};

var dhara = Object.assign({}, shriram);

console.log(shriram);
console.log(dhara);

dhara["name"] = "Dhara Periwal";
dhara["age"] = 22;
dhara["wife"] = "Shriram Rai";

console.log(shriram);
console.log(dhara);

// Shallow Copy of Arrays
var arr1 = [1,2,3,4,5];
var arr2 = arr1;

console.log(arr1);
console.log(arr2);

arr2.push(6);

console.log(arr1);
console.log(arr2);

// Deep Copy of Array (Method - 1)
var arr1 = [1,2,3,4,5];
var arr2 = [...arr1];
arr2.push(6);

console.log(arr1);
console.log(arr2);

// Deep Copy of Array (Method - 2)
var arr1 = [1,2,3,4,5];
var arr2 = arr1.map(el => el);

arr2.push(6);
console.log(arr1);
console.log(arr2);