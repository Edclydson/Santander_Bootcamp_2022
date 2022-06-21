const alunos = [
    {
        nome:'João',
        nota:5,
        turma:'1B',
    },{
        nome:'Sofia',
        nota:9,
        turma:'1B',
    },{
        nome:'Paulo',
        nota:7,
        turma:'2C',
    },{
        nome:'José',
        nota:10,
        turma:'2A',
    }
];

function alunosAprovados(alunos, media){
    let arrayAuxiliar = [];

    for(let i =0; i < alunos.length ; i++){

        let {nota,nome} = alunos[i];

        if(nota >= media){
            arrayAuxiliar.push(nome);
        }

    }
    return arrayAuxiliar;
}

console.log(alunosAprovados(alunos,7));