class Person  {
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age; 
    }

    get name() {
        return this.#name;
    }

    set name (newName) {
        this.#name = newName;
    }

    get age() {
        return this.#age;
    }

    set age(newAge) {
        this.#age = newAge;
    }

    displayInfo() {
        console.log(`name:  ${this.#name}, Age: ${this.#age}`)
    }

    determineAgeCategory() {
        if (this.#age < 17) {
            return  'Underage';
        } else if (this.#age  >= 17 && this.#age <60) {
            return 'Adult';
        } else {
            return 'senior';
        }
    }
}

const person1 = new Person('David', 17);

console.log(`name:  ${person1.name}, Age: ${person1.age}`) ;

person1.name = 'David' ;
person1.age = 17;

//console.log(`name:  ${person1.name}, Age: ${person1.age}`) ;

console.log(`Age Category:  ${person1.determineAgeCategory()}`) ;

person1.age = 100
person1.displayInfo()
console.log(`Age Category:  ${person1.determineAgeCategory()}`) ;

