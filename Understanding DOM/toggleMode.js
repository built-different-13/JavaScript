var outerDiv = document.getElementById('outer');
var innerDiv = document.getElementById('inner');
var text = document.getElementById('content');

var count = 0;

innerDiv.addEventListener('click', function(event) {
    count++;
    if(count%2!=0) {
        innerDiv.style.marginLeft = '78%';
        outerDiv.style.backgroundColor = 'white';
        document.body.style.backgroundColor = '#181818';
        text.style.color = 'white';
    } else {
        innerDiv.style.marginLeft = '0%';
        outerDiv.style.backgroundColor = 'white';
        document.body.style.backgroundColor = 'white';
        text.style.color = '#181818';
    }
    event.stopPropagation();
});