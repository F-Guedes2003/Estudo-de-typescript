let num1: number = 15.5;
let num2: number = 3;
let results: number[] = [];
let continueFlag: boolean = true;

results.push(num1+num2);
results.push(num1 * num2);
results.push(num1/num2);

let paragraphs = document.querySelectorAll("p");

for(let i = 0; i < results.length; i++){
    paragraphs[i].innerHTML = `resultado: ${results[i]}`;
}