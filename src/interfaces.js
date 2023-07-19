"use strict";
class conta {
    constructor(numeroDaConta) {
        this.saldo = 0;
        this.numeroDaConta = numeroDaConta;
    }
}
class contaSalario extends conta {
    depositar(valor) {
        this.saldo = +valor;
    }
}
class contaCorrente extends conta {
    constructor() {
        super(...arguments);
        this.taxaDeTransferencia = 0;
    }
    transferir(valor, destinatario) {
        destinatario.saldo += (valor - this.taxaDeTransferencia);
        return true;
    }
    ;
}
const contaDaMaria = {
    transferir: function (valor, destinatario) {
        throw new Error("Function not implemented.");
    },
    taxaDeTransferencia: 0
};
