interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
    calculateTotal():number
}


let bread: Product = {
    id: 1,
    name: "Pão Caseiro",
    price: 15.00,
    quantity: 8,
    calculateTotal(){
        return this.price * this.quantity;
    } 
};

let cornCake: Product = {
    id: 2,
    name: "Bolo de milho",
    price: 15.00,
    quantity: 2,
    calculateTotal(){
        return this.price * this.quantity;
    } 
};

let chocolateCake: Product = {
    id: 3,
    name: "Bolo de chocolate",
    price: 12.00,
    quantity: 2,
    calculateTotal(){
        return this.price * this.quantity;
    } 
};

let list: number[] = [];

list.push(bread.calculateTotal());
list.push(cornCake.calculateTotal());
list.push(chocolateCake.calculateTotal());

list.map((item) => console.log(item));