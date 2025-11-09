var buttons = document.getElementsByClassName('button');
var display = document.getElementById('display');
var operand1 = 0;
var operator = null;
var operand2 = null;

for (var i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        var value = this.getAttribute('data-value');
        if(value=='/' || value=='+' || value=='-' || value=='*') {
            operator = value;
            operand1 = parseFloat(display.innerText);
        } else if(value=='=') {
            operand2 = parseFloat(display.innerText);

            // Evaluate the Result
            var result = eval(operand1 + " " + operator + " " + operand2);

            operand1 = 0;
            operator = null;
            operand2 = null;

            // Display the Result
            display.innerText = result;

        } else if(value=='CE' || value == 'C' || value=='cut' ) {
                  display.innerText = 0;
        } else {
                display.innerText = value;
        }
    });
}