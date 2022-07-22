interface IPessoa{
    nome:string,
    idade:number,
    profissao: "Ator/Atriz" | "Padeiro" 
}

let pessoa1: IPessoa = {
    nome: "maria",
    idade: 29,
    profissao: "Ator/Atriz"
}

let pessoa2: IPessoa = {
    nome: "Roberto",
    idade: 19,
    profissao:"Padeiro"
}

let pessoa3: IPessoa = {
    nome: "Laura",
    idade: 32,
    profissao:"Ator/Atriz"
}

let pessoa4: IPessoa = {
    nome: "Carlos",
    idade: 19,
    profissao:"Padeiro"
}

