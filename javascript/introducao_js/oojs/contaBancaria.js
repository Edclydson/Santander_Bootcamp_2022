class contaBancaria{
    
    contaBancaria(num_agencia,num_conta,tipo_conta,saldo_conta){
        this.agencia = num_agencia;
        this.numero = num_conta;
        this.tipo = tipo_conta;
        this.saldo = saldo_conta;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor > this._saldo){
            return "Operação negada!";
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor){
        this._saldo+= valor;
        return this._saldo;
    }

}