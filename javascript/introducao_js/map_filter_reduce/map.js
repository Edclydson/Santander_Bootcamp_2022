// COM ARGUMENTO THIS
let maça = {
    value:3,
};

let laranja = {
    value:2,
};

function mapComThis(arr, thisArg){
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

let num = [1,2];

console.log('this -> maçã', mapComThis(num, maça));
console.log('this -> laranja', mapComThis(num, laranja));

// SEM O ARGUMENTO THIS
function mapSemThis(arr){
    return arr.map(function(item){
        return item * 2;
    });
}
let nums = [2,4,6,8,10];
console.log('Map sem this ->',mapSemThis(nums))