const intChar = document.querySelectorAll('.interactiveChar');


//when the mouse hovers over a new character
intChar.forEach((span) => {
    
    span.addEventListener('mouseover', () => {
        span.textContent.toLowerCase();

        let randNum = Math.floor(Math.random() * 9);

        //if randNum === already used font run event again
        //run a function that randomly changes the font weight as well(potential idea)
        if (randNum === 0) {
            span.style.fontFamily = 'grad, serif';
            span.style.fontWeight = '700';
        } else if (randNum === 1) {
            span.style.fontFamily = 'lores-21-serif, sans-serif';
            span.style.fontWeight = '400';
        } else if (randNum === 2) {
            span.style.fontFamily = 'dunbar-text, sans-serif';
            span.style.fontWeight = '800';
        } else if (randNum === 3) {
            span.style.fontFamily = 'bely-display, sans-serif';
            span.style.fontWeight = '400';
        } else if (randNum === 4) {
            span.style.fontFamily = 'itc-avant-garde-gothic-pro, sans-serif';
            span.style.fontWeight = '700';
        } else if (randNum === 5) {
            span.style.fontFamily = 'swear-display, serif';
            span.style.fontWeight = '700';
        } else if (randNum === 6) {
            span.style.fontFamily = 'ltr-slab-extended-variable, sans-serif';
            span.style.fontWeight = '700';
        } else if (randNum === 7) {
            span.style.fontFamily = 'megascope-variable, sans-serif';
            span.style.fontWeight = '700';
        } else if (randNum === 8) {
            span.style.fontFamily = 'kit-rounded, sans-serif';
            span.style.fontWeight = '800';
        }



        
    });
});

