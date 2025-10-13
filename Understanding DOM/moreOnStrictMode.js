var container = document.getElementById('box');
var counter = document.getElementById('click-count');
var count = 0;

container.addEventListener('click', function() {
    "use strict";
    demo=100;
    count++;
    counter.innerText = count;
});