class contaPoupanca extends contaBancaria{

    contaPoupanca(num_agencia,num_conta,saldo_conta){
        super(num_agencia,num_conta,saldo_conta);
        this.tipo = 'Conta Poupança';
    }

}