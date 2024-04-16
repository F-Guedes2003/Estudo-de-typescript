class People{
    name: string;
    age: number;
    sex: string;
    constructor(name: string, age: number, sex: string){
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    amountSpent(amount: number){
        console.log(`The amount spent by ${this.name} is equal to R$${amount}}`);
    }
}

let me: People = new People("Fhelippe", 20, "Male");

me.amountSpent(2.000);