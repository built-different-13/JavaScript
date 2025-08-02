var factorial = function fact(n) {
    var ans=1;
    for (var i=1; i<=n; ++i) {
        ans*=i;
    }
    return ans;
};

function nCr(n,r,factorial){
    return factorial(n)/(factorial(r)*factorial(n-r));
}

console.log(nCr(5,2,factorial));