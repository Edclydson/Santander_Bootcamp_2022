let arrayInicial = [30, 30, 40, 5, 223, 2049, 3034, 5];
let unicos = new Set();

function numerosUnicos(arrayInicial){
    let arrayRetorno = [];
    for(let i = 0; i < arrayInicial.length; i++){
        unicos.add(arrayInicial[i]);
    }
    arrayRetorno.push(...unicos);
    return arrayRetorno;
}

console.log(numerosUnicos(arrayInicial));