"use strict";
// interface PlayerInterface<T, U>{
//     name: string;
//     age: T;
//     skill: U;
// }
// let me: PlayerInterface<string, number> = {
//     name: "Fhelippe",
//     age: "20",
//     skill: 20
// }
// let fulano: PlayerInterface<number, string[]> = {
//     name: "Fulano de tal",
//     age: 15,
//     skill: ["Agir como idiota em locais publicos", "Querer se mostrar para os amigos"]
// }
// console.log(fulano);
// console.log(me);
function getLastElement(array) {
    return array[array.length - 1];
}
let array = [1, 4, 19];
let lastElement = getLastElement(array);
console.log(lastElement);
