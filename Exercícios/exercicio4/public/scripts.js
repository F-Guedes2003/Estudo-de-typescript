"use strict";
/*Crie uma classe chamada Ingresso que possui um valor em reais e um
método imprimeValor().
a. crie uma classe VIP, que herda Ingresso e possui um valor adicional. Crie um método que
retorne o valor do ingresso VIP (com o adicional incluído).
b. crie uma classe Normal, que herda Ingresso e possui um método que imprime: "Ingresso
Normal".
c. crie uma classe CamaroteInferior (que possui a localização do ingresso e métodos para
acessar e imprimir esta localização) e uma classe CamaroteSuperior, que é mais cara (possui
valor adicional). Esta última possui um método para retornar o valor do ingresso. Ambas as
classes herdam a classe VIP */
class Ticket {
    constructor() {
        this.value = 300;
    }
    printValue() {
        console.log(this.value);
    }
}
class Vip extends Ticket {
    constructor() {
        super();
        this.value += 100;
    }
}
class Normal extends Ticket {
    typePrint() { console.log("Ingresso Normal"); }
}
class CamaroteInferior extends Vip {
    constructor(loc) {
        super();
        this.loc = loc;
    }
    printLocation() {
        console.log(this.loc);
    }
}
let camaroteVip = new Vip();
camaroteVip.printValue();
