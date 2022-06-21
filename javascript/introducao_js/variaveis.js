//variaveis
var preco = 2;
var desconto = 0.2;

preco = preco - desconto;

// constantes
// constantes normalmente são declaradas em maiúsculo
const PRECO = 2;

var nome = 'João';
var sobrenome = 'Souza';

if (nome === "João"){
    var nome = "Pedro";
    let sobrenome = "Silva"; // let é variavel de escopo
}

console.log(nome, sobrenome);

let array = [];

array.push(3); // adicionando elemnto ao final do vetor
array.push(2);

array.pop();   // retira o elemento final do vetor

array.push(2);
array.push(5);

array.shift();  // retira o primeiro elemento do vetor

array.unshift(1);   // adiciona elemento ao inicio do vetor

array.includes(3); // verifica se tem o numero 3 no vetor
array.every(item => item === 5); // verifica se todos os itens do vetor sao iguais a 5
array.some(item => item === 5); // verifica se algum dos itens do array tem valor igual a 5
array.reverse(); // reverte a ordem do vetor


let obj = {}; // instanciando um objeto
obj.name = "Julia"; // criando a chave name e atribuindo o valor Julia
obj.age = 20; // criando a chave age e atribuindo o valor 20

Object.values(obj); // retorna valores do objeto
Object.keys(obj); // retorna chaves do objeto

let person = { // outra forma de declarar um objeto
    name:"Julia",
    age:20,
    adress:"Rua 2"
}

person.name; // buscando o valor da chave name
person["name"]; // outra forma de buscar o valor da chave

person["numDeIrmaos"] = 3; // criando uma nova chave e atribuindo valor

let mae = "nomeDaMae";

person[mae] = "Maria"; // criando uma chave com o valor da variavel mae e atribuindo valor 






