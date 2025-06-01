/*1 - Crie um array com 3 elementos
 2 - adicione um elemento no inicio do array
 3 - remova o último elemento desse array
 4 - conte quantos elementos existem nesse elemento
 5 - delete um elemento sem excluir o seu indice*/

 const pessoas = ['Júlia', 'Anna', 'João']

 pessoas.unshift('Arnaldo')

 console.log(pessoas)

 //const removido = pessoas.pop()

 //console.log(pessoas)
 //console.log(removido)

 delete pessoas[0]

 console.log(pessoas.length)
 console.log(pessoas)