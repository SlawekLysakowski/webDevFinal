

function simpleFunction() {
    console.log('simple function');
}

simpleFunction();


function showIt(text) {
    console.log('ortrzymany tekst to ' + text)
}

showIt('Jakis tekst');

function sumOfTwo(a, b) {
    let sum = a + b;
    console.log('suma dodawania to ' + sum);

}

sumOfTwo(2,5);

function returnText () {
    return `jakiś tekst`;
}
let text = returnText();
console.log(text);

function f(p1) {
    console.log(`jeden parametr ` + p1);

}

function f(p1,p2) {
    console.log(`dwa parametry: ` + p1 + " " + p2 );
}

f(2);
f(4,5);


