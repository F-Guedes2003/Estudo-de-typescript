"use strict";
;
let me = {
    name: "Fhelippe",
    age: 20,
    alive: true,
    speak(text) {
        console.log(text);
    }
};
me.name = "Everaldo";
me.speak(`My name is ${me.name}`);
