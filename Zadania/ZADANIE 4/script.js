

function checker(number) {
    if ( number % 2 == 0 ) {
        console.log(`liczba jest parzysta i wynosi ${number}`)
    } else if (number % 2 != 0) {
        console.log(`liczba jest nieparzysta i wynosi ${number}`)
    } else {
        console.log(`Podaj licbę`)
    }
}

checker(6);


function numbers() {
    for (let i = 1; i <= 100; i++) {
        if(i % 3 != 0) {
            continue
        }
        console.log(i)

    }
}
numbers();