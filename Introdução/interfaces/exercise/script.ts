/*Claro! Aqui está outro exercício para praticar objetos em JavaScript:
Exercício:

Crie um objeto chamado Pessoa que represente uma pessoa. O objeto deve ter os seguintes atributos:

    Nome
    Idade
    Gênero
    Altura em centímetros
    Peso em quilogramas

O objeto deve ter os seguintes métodos:

    Um método chamado calcularIMC() que calcula o Índice de Massa Corporal (IMC) da pessoa usando a fórmula IMC = peso / (alturaEmMetros * alturaEmMetros). O método deve retornar o valor do IMC.
    Um método chamado classificarIMC() que classifica o IMC da pessoa de acordo com a tabela padrão de classificação de IMC. O método deve retornar uma mensagem indicando se a pessoa está abaixo do peso, com peso normal, com sobrepeso, obesa ou gravemente obesa.

Em seguida, crie uma instância do objeto Pessoa, configure alguns atributos e chame os métodos para calcular e classificar o IMC da pessoa*/

interface isPerson{
    nome: string,
    idade: number,
    genero: boolean;
    altura: number,
    peso: number

    calcularImc(): number;

    classificarImc(): void;
}

let pessoa: isPerson = {
    nome: "Fhelippe",
    idade: 20,
    genero: true,
    altura: 165,
    peso: 55,

    calcularImc() {
        return this.altura/this.peso * 2;
    },

    classificarImc() {
        let imc = this.calcularIMC();
        if(imc < 16.9){
            console.log("Magraza extrema");
        } else if(imc < 24.9){
            console.log("Peso normal");
        } else if(imc < 29.9){
            console.log("Acima do peso")
        }else if(imc< 34.9){
            console.log("Obesidade I")
        }else if(imc < 40){
            console.log("Obesidade II");
        }else {
            console.log("Obesidade III");
        }
    },
}

pessoa.classificarImc();