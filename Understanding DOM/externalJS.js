function sayHello() {
    alert('Billion Dollar Startup');
}

function sayBye() {
    alert('Multi Billion Dollar Startup');
}

var helloBtn = document.getElementById('btn2');
helloBtn.addEventListener('click', sayHello);
helloBtn.addEventListener('click', sayBye);