/*//#region 
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 35
};

console.log(pessoa)

*/
//#endregion

function criaPessoa (nome, sobrenome, idade){
    return { nome,sobrenome,idade }
}

const pessoas = []
const pessoa1 = pessoas.push(criaPessoa('Arnaldo', 'Ribeiro', 23))
const pessoa2 = pessoas.push(criaPessoa('Davi', 'Martins', 25))

console.log(pessoas)