// var will create a global scope and it runs for loop very fast than 1 sec, that's why the value of i will become 6 

for (var i=1; i<=5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}

// let will create a block variable for every iteration of i

for (let i=1; i<=5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}