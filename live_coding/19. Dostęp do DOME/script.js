window.onload = function () {
    document.getElementById('container').style.border = '3px solid blue';
    document.querySelector('#container').style.border = '3px solid black';
    // let arr = document.getElementsByClassName('box');
    // for (let i = 0; i<arr.length; i++) {
    //     arr[i].style.border = '3px solid orange';
    // }

// for(let element of arr) {
//     element.style.border = '3px solid orange';
// }

// document.getElementsByTagName('div');
let arr = document.querySelectorAll('p');

// for (let element of arr) {
//     element.style.border = '3px solid orange';
// }

// document.getElementById('special').parentNode.style.border = '3px solid orange';
document.getElementById('special').previousElementSibling.style.borer = '3px solid orange';
document.getElementById('special').nextElementSibling.style.borer = '3px solid orange';

document.getElementById('container').firstElementChild.style.border = '3px solid orange';




}