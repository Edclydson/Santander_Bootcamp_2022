function filtraPares(arr){
    return arr.filter(callBack);
}

function callBack(item){
    return item % 2 === 0;
}

let meuArray = [1,23,33,67,30,2,4];

console.log(filtraPares(meuArray));