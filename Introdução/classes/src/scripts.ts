/*Crie uma classe chamada Carro que represente um carro. O carro deve ter os seguintes atributos:

    Marca
    Modelo
    Ano
    Cor
    Velocidade atual

A classe deve ter os seguintes métodos:

    Um construtor que inicialize os atributos marca, modelo, ano, cor e velocidadeAtual com os valores passados como parâmetros.
    Um método chamado acelerar() que aumenta a velocidade do carro em 10 km/h.
    Um método chamado frear() que reduz a velocidade do carro em 10 km/h.
    Um método chamado getVelocidadeAtual() que retorna a velocidade atual do carro.

Em seguida, crie uma instância da classe Carro, configure alguns atributos e chame os métodos para acelerar, frear e obter a velocidade atual do carro.*/

class Carro{
    marca: string;
    modelo: string;
    ano: number;
    cor: string;
    velocidadeAtual: number;

    constructor(marca: string, modelo: string, ano: number, cor: string, velocidadeAtual = 0){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.velocidadeAtual = velocidadeAtual;
    }

    acelerar(): void{
        this.velocidadeAtual += 10;
    }

    frear(): void{
        this.velocidadeAtual -= 10;
    }

    getVelocidadeAtual(): number{
        return this.velocidadeAtual;
    }
}

let fusca = new Carro("Volkswagen", "Fusca", 1968, "Azul bebê", 60);

fusca.acelerar();

console.log(fusca.getVelocidadeAtual());