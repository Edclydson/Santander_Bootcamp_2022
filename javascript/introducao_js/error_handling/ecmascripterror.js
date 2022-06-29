// ocorrem em tempo de execução 
// composto por: mensagem, nome, linha e callstack

// new Error(msg,nomeArquivo,numeroLinha);
// todos os parametros sao opcionais

let meuErro = new Error('Mensagem Inválida!');
// nomeando o meuErro
meuErro.name = 'invalidMessage';
throw meuErro;

