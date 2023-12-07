const intChar = document.querySelectorAll('.interactiveChar');


intChar.forEach((span = document.querySelectorAll('.interactiveChar')) => {
    var spanText = span.textContent;
    console.log(spanText);
    
    span.addEventListener('mouseover', () => {
        span.style.fontFamily = 'sans-serif';
    });

});

