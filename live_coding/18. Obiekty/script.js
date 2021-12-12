let person = {
    firstName: 'Jan',
    lastName: 'Kowalski',
    introduce: function () {
        console.log(`nazywam się: ${this.firstName} ${this.lastName}`);

    }
}

person.introduce();

person.firstName = 'Adam';
person.introduce();


function Car(brand, model) {
    this.brand = brand;
    this.model = model;
    this.showDetails = function () {
        console.log('car: ' + brand + ' ' + model);
    };
}

let fiat = new Car('Fiat', 125);
fiat.showDetails();


class House{
    constructor(windows, doors) {
        this.windows = windows;
        this.doors = doors;
    }
    showDetails() {
        console.log(`dom ma ${this.windows} okien i ${this.doors} drzwi`)
    }
}

let house = new House(2,6);
house.showDetails()