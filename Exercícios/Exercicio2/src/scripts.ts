/*Implemente uma classe chamada “ContaBancária” que possua atributos para armazenar o número da conta, nome do titular e saldo. 
Adicione métodos para realizar depósitos e saques.*/

interface conta{
    numeroConta: string | number;
    nomeTitular: string;
    saldo: number;

    deposito(amount: number): void;
    saque(amount: number): void;
}

class ContaBancaria implements conta {
    numeroConta: string | number;
    nomeTitular: string;
    saldo: number;
    constructor(numeroConta: string|number, nomeTitular: string, saldo: number = 0){
        this.numeroConta = numeroConta;
        this.nomeTitular = nomeTitular;
        this.saldo = saldo;
    }
    deposito(amount: number){
        this.saldo += amount;
    }

    saque(amount: number){
        this.saldo -= amount;
    }
}

let accountGroup: ContaBancaria[] = [];
accountGroup.push(new ContaBancaria(1, "Fhelippe", 180));
accountGroup.push(new ContaBancaria(2, "Graciette", 744));
accountGroup.forEach(item => console.log(item));