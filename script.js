const intChar = document.querySelectorAll('.interactiveChar');



intChar.forEach((span = document.querySelectorAll('.interactiveChar')) => {
    var spanText = span.textContent;
    console.log(spanText);
    
    span.addEventListener('click', () => {
        console.log(spanText);
        span.style.fontFamily = 'sans-serif';
    });
});

