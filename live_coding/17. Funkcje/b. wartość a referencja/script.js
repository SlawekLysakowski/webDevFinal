let numberVal = 5;
numberVal = 4;

function rewrite(param) {
 console.log(`wartość wewnątrz funkcji:` + param)
  param = 10;
console.log(`wartość wewnątrz funkcji:` + param)
}

rewrite(numberVal);
console.log(numberVal)

var numberArray = [1,2,3];

function rewrite2(arr) {
 arr[1] = 1000;
 console.log(arr)
}

rewrite2(numberArray);
console.log(numberArray);