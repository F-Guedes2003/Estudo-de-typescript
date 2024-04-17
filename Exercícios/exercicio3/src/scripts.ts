/*Crie uma classe chamada “Retângulo” que possua atributos para armazenar a largura e a altura. 
Implemente métodos para calcular a área do retângulo.*/

interface triangle {
    width: number;
    height: number;
    
    getArea(): void;
}

class Triangle implements triangle {
    width: number;
    height: number;
    constructor(width: number, height: number){
        this.width = width;
        this.height = height;
    }

    getArea(): void {
        console.log(`Triangle area: ${this.width * this.height / 2}`);
    }
}