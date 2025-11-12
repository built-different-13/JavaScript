var source = document.querySelectorAll('.nav-menu li a');

for (var i=0; i<source.length; i++) {
    source[i].addEventListener('click', function() {
        var value = this.getAttribute('data-value');
        var target = document.getElementById(value);
        var current = 0;
        var distance = target.offsetTop;

        var targetScroll = setInterval(function() {
            if(current<=distance) {
                window.scrollBy(0,50);
                current+=50;
            } else {
                clearInterval(targetScroll);
            }
        }, 50);
    });
}