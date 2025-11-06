var buttons = document.getElementsByClassName('button');
var display = document.getElementById('display');
var operand1 = 0;
var operand2 = null;
var operator = null;

for (var i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        var value = this.getAttribute('data-value');
        if(value=='+') {
           operator = '+';
           operand1 = parseFloat(display.innerText);
           display.innerText = "";
        } else if(value=='=') {
           operand2 = parseFloat(display.innerText);
           // use eval to get result
            var ouptut = eval(operand1 + " " + operator + " " + operand2);
           // show result on display
           display.innerText = ouptut;
        } else {
            display.innerText += value;
        }
    });
}