
function validaArray(arr,numero){
    try{
        if(!arr && !numero){
            throw new ReferenceError("Envie os parametros!");
        }
        if(typeof arr !== 'object'){
            throw new TypeError("Array informado não é do tipo Objeto!");
        }
        if(typeof numero !== 'number'){
            throw new TypeError("A variavel numero não é do tipo number!");
        }
        if(arr.length !== numero){
            throw new RangeError("O tamanho do array não corresponde ao numero!");
        }
        return arr;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log("Este erro é um ReferenceError!");
            console.log(e.name);
            console.log(e.stack);
        }
        else if(e instanceof TypeError){
            console.log("Este erro é um TyoeError!");
            console.log(e.name);
            console.log(e.stack);
        }
        else if(e instanceof RangeError){
            console.log("Este erro é um RangeError!");
            console.log(e.name);
            console.log(e.stack);
        }
        else{console.log("Ocorreu um erro inesperado!" + e);}
    }
    
}
console.log(validaArray([1,2],2));