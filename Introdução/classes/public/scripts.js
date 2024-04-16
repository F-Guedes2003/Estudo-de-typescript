"use strict";
class People {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    amountSpent(amount) {
        console.log(`The amount spent by ${this.name} is equal to R$${amount}`);
    }
}
let me = new People("Fhelippe", 20, "Male");
me.amountSpent(2000);
