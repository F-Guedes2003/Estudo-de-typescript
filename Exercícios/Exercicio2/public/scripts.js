"use strict";
/*Implemente uma classe chamada “ContaBancária” que possua atributos para armazenar o número da conta, nome do titular e saldo.
Adicione métodos para realizar depósitos e saques.*/
class ContaBancaria {
    constructor(numeroConta, nomeTitular, saldo = 0) {
        this.numeroConta = numeroConta;
        this.nomeTitular = nomeTitular;
        this.saldo = saldo;
    }
    deposito(amount) {
        this.saldo += amount;
    }
    saque(amount) {
        this.saldo -= amount;
    }
}
let accountGroup = [];
accountGroup.push(new ContaBancaria(1, "Pedro", 180));
accountGroup.push(new ContaBancaria(2, "João", 744));
accountGroup.forEach(item => console.log(item));