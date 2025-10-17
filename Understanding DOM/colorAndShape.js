var outerDiv = document.getElementById('outer');
var innerDiv = document.getElementById('inner');
var changeColor = document.getElementById('color');
var changeShape = document.getElementById('shape');

var cnt1 = 0;
changeColor.addEventListener('click', function() {
    cnt1++;
    if(cnt1%2!=0) {
    outerDiv.style.backgroundColor = 'green';
    } else {
        outerDiv.style.backgroundColor = 'blueviolet';
    }
});

var cnt2 = 0;
changeShape.addEventListener('click', function() {
    cnt2++;
    if(cnt2%2!=0) {
    innerDiv.style.height = '0';
    innerDiv.style.width = '0';
    innerDiv.style.borderRight = '75px solid transparent';
    innerDiv.style.borderBottom = '75px solid white';
    innerDiv.style.backgroundColor = 'transparent';
    } else {
        innerDiv.style.height = '75px';
        innerDiv.style.width = '75px';
        innerDiv.style.backgroundColor = 'white';
        innerDiv.style.border = 'none';
    }
});