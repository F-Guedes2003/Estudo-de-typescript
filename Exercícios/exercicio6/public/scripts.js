"use strict";
/*Escreva uma função que receba dois números inteiros retorne o menor
número */
function getBigger(num, num2) {
    if (num > num2) {
        console.log(`${num} é maior`);
    }
    else if (num2 > num) {
        console.log(`${num2} é maior`);
    }
    else {
        console.log("Os números são iguais");
    }
}
let num1 = 3;
let num2 = 5;
getBigger(num1, num2);
