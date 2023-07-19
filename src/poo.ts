import { NumericLiteral } from "typescript";

class Pessoa {
    private nome: string;
    renda?: number;

    // a opcional não pode vir antes da obirgatória
    constructor(nome: string, renda?: number) {
        this.nome = nome;
        this.renda = renda;
    }

    dizOla(): string {
        return `${this.nome} disse hello typescript!`
    }
}

class contaBancaria {
    protected saldo: number = 0;
    public numeroConta: number;

    constructor(numeroConta: number) {
        this.numeroConta = numeroConta;
    }

    static retornaNumeroDoBanco () {
        return 125;

    }

    private getSaldo() {
       return this.saldo; 
    }

    depositar(valor: number) {
        this.saldo += valor;
    }

}


class contaBancariaPessoaFisica extends contaBancaria {
    depositar(valor: number): void {
        this.saldo = valor * 2;
    }
}

const contaDoPedro = new contaBancaria(123456);

contaBancaria.retornaNumeroDoBanco()
