var numero_1 = parseInt(prompt("Digite o primeiro numero:"));
var numero_2 = parseInt(prompt("Digite o segundo numero:"));

var soma = numero_1 + numero_2;


verificaNumeros(numero_1,numero_2);

function verificaNumeros( num1, num2){

    var resposta = "";
    num1 == num2 ? resposta = "Os numeros "+num1+" e "+num2+" são iguais." : resposta = "Os numeros "+num1+" e "+num2+" não são iguais.";

    (num1+num2) > 10 ? resposta += " A soma dos dois numeros é "+(soma)+", que é maior que 10 e " : resposta += " A soma dos dois numeros é "+(soma)+" e não é maior que 10 e ";

    (num1+num2) < 20 ? resposta += "menor que 20" : resposta += "maior que 20";
    return resposta;
}