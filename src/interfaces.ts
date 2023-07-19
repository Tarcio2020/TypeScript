class conta {
    numeroDaConta: number;
    saldo: number = 0;

    constructor(numeroDaConta: number) {
        this.numeroDaConta = numeroDaConta;
    }
}


class contaSalario extends conta {
    depositar (valor:number) {
        this.saldo =+ valor;
    }
}

interface ITransacional {
    transferir: (valor: number, destinatario: conta) => boolean;
    taxaDeTransferencia: number;
}

interface Iexemplo2 {
    cnpj: number;
}

interface Iexemplo3 extends Iexemplo2 {
    telefone: number;
}

class contaCorrente extends conta implements ITransacional{
    transferir (valor: number, destinatario: conta) {
        destinatario.saldo += (valor- this.taxaDeTransferencia);
        return true;
    };
    
    taxaDeTransferencia: number = 0;
}


const contaDaMaria: ITransacional = {
    transferir: function (valor: number, destinatario: conta): boolean {
        throw new Error("Function not implemented.");
    },
    taxaDeTransferencia: 0
}