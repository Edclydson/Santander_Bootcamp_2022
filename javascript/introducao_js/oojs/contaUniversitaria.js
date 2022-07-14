class contaUniversitaria extends contaBancaria{

    contaUniversitaria(num_agencia,num_conta,saldo_conta){
        super(num_agencia,num_conta,saldo_conta);
        this.tipo = 'Conta Universitaria';
    }

    sacar(valor){
        if(valor > 500){
            return "Operação negada!";
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
}