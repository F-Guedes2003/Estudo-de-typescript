let sayHello: Function; //We can declare that sayHello will be a function
sayHello = () => console.log("Hello"); 

// let add = (num1: number, num2: number) => num1 + num2; //We can specify the types of the parameters that it will be received

let add = (num1:number, num2: number, num3?: number) => { //we can set an optional value using the "?" after it name
    console.log(num1 + num2);
};



add(3, 5);
sayHello();