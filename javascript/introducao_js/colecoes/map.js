let nomesUsuarios = new Map();

nomesUsuarios.set('Luiz','Admin');
nomesUsuarios.set('Stephany','Admin');
nomesUsuarios.set('Jorge','User');
nomesUsuarios.set('Natalia','Admin');

function getAdmins(nomesUsuarios){
    let Admins = [];
    for([key,value] of nomesUsuarios){
        if(value === 'Admin'){
            Admins.push(key);
        }
    }
    return Admins;
}

console.log(getAdmins(nomesUsuarios));