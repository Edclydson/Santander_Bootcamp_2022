function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

let pessoa1 = {
    nome:"Edclydson",
    idade:26
}

let pessoa2 = {
    nome:"Vitoria",
    idade: 22
}


console.log(calculaIdade.call(pessoa2,30));
console.log(calculaIdade.apply(pessoa1,[30]));