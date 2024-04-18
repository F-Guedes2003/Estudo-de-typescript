/*Escreva uma função potencia(base, expoente) que, quando chamada,
retorna baseexpoente. Por exemplo, potencia(3, 4) deve retornar 81. Assuma
que expoente é um inteiro maior ou igual a 1.*/

function powNumber(base: number, expoent: number): number{
    let acumulator = 1;
    for(let i = 0; i < expoent; i++){
        acumulator *= base;
    }
    return acumulator;
}

let pot: number;

pot = powNumber(2, 2);