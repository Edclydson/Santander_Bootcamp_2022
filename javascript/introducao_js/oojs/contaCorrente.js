class contaCorrente extends contaBancaria{

    contaCorrente(num_agencia,num_conta,saldo_conta, cartaoCredito){
        super(num_agencia,num_conta,saldo_conta);
        this.tipo = 'Conta Corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}