/*Crie uma classe chamada “Círculo” que possua um atributo para armazenar o raio e métodos para calcular a área e o perímetro do círculo.*/

class Circulo {
    raio: number;
    constructor(raio: number){
        this.raio = raio;
    }

    calcularRaio(){
        const pi = 3.14;
        console.log(`área do círculo: ${pi * this.raio * this.raio}`);
    }
    calcularPerimetro(){
        const pi = 3.14;
        console.log(`Perímetro do círculo: ${2 * pi * this.raio}`);
    }
}

let roda = new Circulo(4);

roda.calcularRaio();
roda.calcularPerimetro();