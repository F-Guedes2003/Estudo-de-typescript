/* Crie a classe Imovel, que possui um endereço e um preço.
a. crie uma classe Novo, que herda Imovel e possui um adicional no preço. Crie métodos de
acesso e impressão deste valor adicional.
b. crie uma classe Velho, que herda Imovel e possui um desconto no preço. Crie métodos de
acesso e impressão para este desconto.*/

interface imovel {
    endereço: string;
    preco: number;
}

class Imovel implements imovel{
    endereço: string;
    preco: number;
    constructor(endereco: string, preco: number){
        this.endereço = endereco;
        this.preco = preco;
    }
}

class ImovelNovo extends Imovel{
    constructor(endereco: string, preco:number){
        super(endereco, preco);
        this.preco += 10000;
    }

    imprimirAd(){
        console.log("O desconto foi de: ", 10000);
    }
}

class ImovelAntigo extends Imovel{
    constructor(endereco: string, preco:number){
        super(endereco, preco);
        this.preco -= 10000;
    }

    imprimirDesconto(){
        console.log("O desconto foi de ", 10000);
    }
}