//maybe change the if else font hovering into an object?
//a char is hovered
//a timer is started
//if another character isn't hovered within 10 seconds
//change a random character
//don't change the same character twice in a row
//continue the loop until a character is hovered

//fontlist for interactive title
let fonts = [
    {
        name: 'Grad',
        fontFamily: 'grad, serif',
        fontWeight: 700,
    },
    {
        name: 'Lo-Res 21',
        fontFamily: 'lores-21-serif, sans-serif',
        fontWeight: 400,
    },
    {
        name: 'Dunbar Text',
        fontFamily: 'dunbar-text, sans-serif',
        fontWeight: 800,
    },
    {
        name: 'Bely Display',
        fontFamily: 'bely-display, sans-serif',
        fontWeight: 400,
    },
    {
        name: 'ITC Avant Garde Gothic Pro',
        fontFamily: 'itc-avant-garde-gothic-pro, sans-serif',
        fontWeight: 700,
    },
    {
        name: 'Swear Display',
        fontFamily: 'swear-display, serif',
        fontWeight: 700,
    },
    {
        name: 'LTR Slab Extended Variable',
        fontFamily: 'ltr-slab-extended-variable, sans-serif',
        fontWeight: 700,
    },
    {
        name: 'Megascope Variable',
        fontFamily: 'megascope-variable, sans-serif',
        fontWeight: 700,
    },
    {
        name: 'Kit Rounded',
        fontFamily: 'kit-rounded, sans-serif',
        fontWeight: 800,
    },
]


const intChar = document.querySelectorAll('.interactiveChar');





let arrChars = [];

intChar.forEach((span) => {
    
    arrChars.push(span);

    //when the mouse hovers over a new character
    span.addEventListener('mouseover', () => {
        clearTimeout(charTimer);
        charTimer = setTimeout(timeDelay, 2000);

        //generates a random number in the font array to change the character that is hovered
        function changeFont() {
            let randNumFonts = Math.floor(Math.random() * fonts.length);
            span.style.fontFamily = fonts[randNumFonts].fontFamily;
        };
        changeFont();

    });
});


let charTimer;

//executes if a character hasn't been hovered in 10 seconds
function timeDelay() {
    let randomChar = Math.floor(Math.random() * arrChars.length);
    console.log(randomChar);

    changeFont();



}