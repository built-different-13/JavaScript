function fibonacciSeries(N) {
    var i=0, j=1, k=i+j;
    while(k<=N) {
        if(k==N) {
            return true;
        }
        i=j;
        j=k;
        k=i+j;
    }
    return false;
}

var output = fibonacciSeries(10);
console.log(output);