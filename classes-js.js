class contaBancaria  {
    constructor (agencia, numero, tipo, saldo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;
    }

    //GETTER AND SETTER
    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    // METODOS
    saque(valorSaque){
        if (valorSaque > this._saldo){
            console.log("Operacao negada !")
        }

        this._saldo = this._saldo - valorSaque;

        return this._saldo;
    }

    depositar(valorDeposito){
        this._saldo = this._saldo + valorDeposito;

        return this._saldo
    }
}

class contaCorrente extends contaBancaria {
    constructor (agencia, numero, saldo, cartaoCredito){
        super (agencia, numero, saldo);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        return this._cartaoCredito = valor;
    }
}

class contaPoupanca extends contaBancaria {
    constructor (agencia, numero, tipo, saldo){
        super (agencia, numero, tipo, saldo);
    }
}

class contaUniversitaria extends contaBancaria {
    constructor (agencia, numero, tipo, saldo){
        super (agencia, numero, tipo, saldo);
    }

    //GETTER AND SETTER
    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        return this._saldo = valor;
    }

    //METODOS

    saque(valorSaque){
        if(valorSaque => 500){
            console.log ("Operacao cancelada.")
        }
        if(valorSaque > this._saldo){
            console.log("Operacao cancelada.")
        }

        this._saldo = this._saldo - valorSaque;

        return this._saldo;

    }

}

