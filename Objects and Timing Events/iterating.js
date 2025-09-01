var employee = {
    name: "Shriram Rai",
    age: 23,
    wife: "Dhara Periwal",
    occupation: "Startup CEO",
    valuation: "5 Billion USD",
    income: "700 Million USD"
};

for (var prop in employee) {
    console.log(prop, employee[prop]);
}

var keys1 = Object.keys(employee);
console.log(keys1);

var keys2 = Object.getOwnPropertyNames(employee);
console.log(keys2);