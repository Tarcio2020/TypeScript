"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    // a opcional não pode vir antes da obirgatória
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla() {
        return `${this.nome} disse hello typescript!`;
    }
}
class contaBancaria {
    constructor(numeroConta) {
        this.saldo = 0;
        this.numeroConta = numeroConta;
    }
    static retornaNumeroDoBanco() {
        return 125;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
class contaBancariaPessoaFisica extends contaBancaria {
    depositar(valor) {
        this.saldo = valor * 2;
    }
}
const contaDoPedro = new contaBancaria(123456);
contaBancaria.retornaNumeroDoBanco();
