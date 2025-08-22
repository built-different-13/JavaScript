var arr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function returnDay(number) {
    if(number<1 || number>7) {
        return null;
    }
    return arr[(number-1)%(arr.length)];
}

for (var i=1; i<=7; ++i) {
     var output = returnDay(i);
     console.log(output);
}