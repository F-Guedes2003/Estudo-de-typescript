interface isPerson {
    name: string;
    age: number;
    alive: boolean;
    speak(a: string): void;
};

let me: isPerson = {
    name: "Fhelippe",
    age: 20,
    alive: true,
    speak(text){
        console.log(text);
    }
};

me.name = "Everaldo";

me.speak(`My name is ${me.name}`);