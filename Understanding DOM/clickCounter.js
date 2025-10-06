var Box = document.getElementById('box');
var counter = 0;
Box.addEventListener('click', function() {
    counter++;
    clicker.innerText = "Box Clicked " + counter + " times";
});