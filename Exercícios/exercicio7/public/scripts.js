"use strict";
/*Escreva uma função potencia(base, expoente) que, quando chamada,
retorna baseexpoente. Por exemplo, potencia(3, 4) deve retornar 81. Assuma
que expoente é um inteiro maior ou igual a 1.*/

function powNumber(base, expoent) {
    let acumulator = 1;
    for (let i = 0; i < expoent; i++) {
        acumulator *= base;
    }
    return acumulator;
}
let pot;
pot = powNumber(5, 3);

console.log(pot);