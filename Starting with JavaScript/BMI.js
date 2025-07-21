var weight = 58;
var height = 1.6;

var BMI = weight/(height*height);

if(BMI<18.5) {
    console.log("You are Underweight.");
} else if(BMI>=18.6 && BMI <=24.9) {
    console.log("You are Healthy.");
} else if(BMI>=25 && BMI <=25.9) {
    console.log("You are Overweight.");
} else {
    console.log("You are Obese.");
}