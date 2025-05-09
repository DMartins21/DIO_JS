/*
1 - dado o array [banana, maçã, laranja],
 substitua o segundo elemento por uva

const frutas = ['banana', 'maçã', 'laranja']
frutas[1] = 'uva'
console.log(frutas)
*/

/*
2 - Comece com o array [1,2,3].
Adicione o número 0 no começo e o número 4 no final do array

const numeros = [1,2,3]
numeros.unshift(0)
numeros.push(4)
console.log(numeros)
*/

/*
3 - dado o array [Fusca, Civic, Gol, Palio].
Remova o primeiro elemento e o último elemento

const carros = ['Fusca', 'Civic', 'Gol', 'Palio']
carros.shift()
carros.pop()
console.log(carros)
*/

/*
4 - Com o array [São Paulo, Rio de Janeiro, Belo Horizonte].
Remova o segundo elemento utilizando o comando delete

const cidades = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte']
delete cidades[1]
console.log(cidades)
*/

/*
5 - Dado o array [Alice, Bob, Carlos, Diana, Eva].
Crie um novo array que contenha apenas o segundo e terceiro elemento

const pessoas = ['Alice', 'Bob', 'Carlos', 'Diana', 'Eva']
const novo = [pessoas.slice(1,3)]
console.log(novo)
*/

/*
6 - Dado o array [cachorro, gato, pássaro].
Altere o valor de gato para coelho sem acessar diretamente o indice

const animais = ['Cachorro', 'Gato', 'Pássaro']
animais.splice(1,1, 'Coelho')
console.log(animais)
*/

/* 7 - Crie um array [5,7,9,10].
Após adicionar o valor 6 no final do array, remova o primeiro elemento

const notas = [5,7,9,10]
notas.push(6)
notas.shift()
console.log(notas)
*/

/*
8 - Com o array [Carlos, Fernanda, Lucas].
Remova todos os elementos do array utilizando uma combinação de metodos,
sem redefinir o array
*/

const clientes = ['Carlos', 'Fernanda', 'Lucas']

clientes.length = 0

console.log(clientes)