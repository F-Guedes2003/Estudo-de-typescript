"use strict";
/*Crie a classe Jogador descrita no “diagrama” abaixo:Jogador
id: int
nome: String
apelido: String
idade: int
numero: int
posicao: String
qualidade: int
cartoes: int
suspenso: Boolean
Jogador()
Jogador(all attrs)
verificarCondicaoDeJogo(): Boolean
a) Cadastrar/Instanciar pelo menos um time completo 11 jogadores.
b) Criar um método que verifica a condição de jogo, ou seja, um método booleano
que retornará true se o jogador está apto a jogar e false se o jogador está
suspenso. Note que um jogador está suspenso pelo 3 cartão amarelo ou
quando recebe uma punição cartão vermelho ou em uma decisão do tribunal.
c) Em uma outra classe, crie o método main, o qual cadastra os jogadores e ao
final imprimirá a lista do “plantel” juntamente com a informação de quem está
apto a jogar, conforme a figura abaixo.*/
class Player {
    constructor(id, name, aliase, age, number, position, quality, cards, suspended) {
        this.id = id;
        this.name = name;
        this.aliase = aliase;
        this.age = age;
        this.number = number;
        this.position = position;
        this.quality = number;
        this.cards = cards;
        this.suspended = suspended;
    }
    playerDetails() {
        console.log(`${this.id}\n${this.name}\n${this.aliase}\n${this.age}\n${this.number}\n${this.position}\n${this.quality}\n${this.cards}\n${this.suspended}\n`);
    }
    verifyGameCondition() {
        return this.suspended;
    }
}
class Team {
    constructor(player1, player2, player3, player4, player5, player6, player7, player8, player9, player10, player11) {
        this.players = [player1, player2, player3, player4, player5, player6, player6, player7, player8, player9, player10, player11];
    }
    getTeamStatus() {
        console.log("Goleiros: ");
        for (let i = 0; i < 11; i++) {
            if (this.players[i].position == "Goleiro") {
                console.log(`-${this.players[i].name} - ${this.players[i].suspended}`);
            }
        }
        console.log("Zagueiros: ");
        for (let i = 0; i < 11; i++) {
            if (this.players[i].position == "Zagueiro") {
                console.log(`-${this.players[i].name} - ${this.players[i].suspended}`);
            }
        }
        console.log("Laterais: ");
        for (let i = 0; i < 11; i++) {
            if (this.players[i].position == "Lateral") {
                console.log(`-${this.players[i].name} - ${this.players[i].suspended}`);
            }
        }
        console.log("Volantes: ");
        for (let i = 0; i < 11; i++) {
            if (this.players[i].position == "Volante") {
                console.log(`-${this.players[i].name} - ${this.players[i].suspended}`);
            }
        }
        console.log("Meias: ");
        for (let i = 0; i < 11; i++) {
            if (this.players[i].position == "Meio-Campo") {
                console.log(`-${this.players[i].name} - ${this.players[i].suspended}`);
            }
        }
        console.log("Atacantes: ");
        for (let i = 0; i < 11; i++) {
            if (this.players[i].position == "Atacante") {
                console.log(`-${this.players[i].name} - ${this.players[i].suspended}`);
            }
        }
    }
}
