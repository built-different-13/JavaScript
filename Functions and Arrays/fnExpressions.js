// Named Function Expression
var factorial1 = function fact(n) {
    var ans = 1;
    for (var i=1; i<=n; ++i) {
        ans*=i;
    }
    return ans;
}; 

console.log(factorial1);
console.log(factorial1(7));

// Anonymous Function Expression
var factorial2 = function (n) {
    var ans1 = 1;
    for (var i=1; i<=n; ++i) {
        ans1*=i;
    }
    return ans1;
}

console.log(factorial2);
console.log(factorial2(5));