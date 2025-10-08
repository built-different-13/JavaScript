var outerDiv = document.getElementById('outer');
outerDiv.addEventListener('mouseover', function() {
    console.log('Mouse Over');
});

outerDiv.addEventListener('mouseout', function() {
    console.log('Mouse Out');
});

var searchInput = document.getElementById('search');
searchInput.addEventListener('keypress', function() {
    console.log('Key is pressed');
});

document.addEventListener('keypress', function() {
    console.log('Key is pressed');
});

document.addEventListener('keydown', function() {
    console.log('Key down');
});

document.addEventListener('keyup', function() {
    console.log('Key up');
});

document.addEventListener('keydown', function(event) {
    console.log('Key down', event.keyCode);
});