// Example - 1
var employee = {
   name: "Shriram Rai",
   age: 23,
   wife: "Dhara Periwal",
   occupation: "Startup CEO",
   valuation: "2 Billion US Dollar",
   salary: "700 million US Dollar"
};

console.log(employee);
console.log(employee.salary);
console.log(employee["valuation"]);

// Example - 2
var student = {
  name: "Shriram Rai",
  rollNo: 21112081,
  marks: 90
};

function printProperty(obj,prop) {
    console.log(obj[prop]);
}

var prop = "name";

printProperty(student,prop);