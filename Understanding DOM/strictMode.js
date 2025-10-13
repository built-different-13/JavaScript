"use strict";

var container = document.getElementById('box');
var counter = document.getElementById('click-count');
var count=0;
container.addEventListener('click', function() {
     count++;
     counter.innerText = count;
});