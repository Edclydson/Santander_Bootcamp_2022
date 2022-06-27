function somaNumeros(arr){
    return arr.reduce(function(prev,current){
        console.log({prev});
        console.log({current});
        return prev + current;
    },0);
}

let arr = [1,2];

console.log(somaNumeros(arr));


let lista = [
    {
        name:'sabao em po',
        preco:30
    },
    {
        name:'cereal',
        preco:12
    },
    {
        name:'toalha',
        preco:20
    }
];

let saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel,lista){
    return lista.reduce(function(prev,current,index){
        console.log('rodada ',index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel,lista));