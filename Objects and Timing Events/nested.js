var employee = {
    name: "Shriram Rai",
    age: 23,
    wife: "Dhara Periwal",
    occupation: "Startup CEO",
    valuation: "5 Billion USD",
    income: "700 Million USD",
    address: {
     city: "Mohali",
     pincode: 140307
    }
};

console.log(employee);
console.log(employee.address);
console.log(employee.address.city);
console.log(employee["address"]["city"]);