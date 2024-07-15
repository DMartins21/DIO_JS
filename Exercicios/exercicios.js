//#region  Exercicio 1
/*
var aluno = 'Davi'

const notas = [9.5, 9.0, 3.5]

const media = (notas[0] + notas[1] + notas[2]) / notas.length

if(media < 5){
    console.log(`${aluno} foi Reprovado, teve media de: ${media.toFixed(2)}`)
}else if(media >= 5 && media <= 7){
    console.log(`${aluno} esta de recuperacao, teve media de: ${media.toFixed(2)}`)
}else{
    console.log(`${aluno}, passou de semestre, teve media de: ${media.toFixed(2)}`)
}
*/
//#endregion

//#region Exercicio 2
/*
var nome = 'Marcos'

const peso = 94.5
const altura = 1.85

const imc = peso / Math.pow(altura,2)

if(imc < 18.5){
    console.log(`${nome} esta abaixo do peso, seu IMC eh de ${imc}`)
}else if(imc >= 18.5 && imc <=25){
    console.log(`${nome} esta com o peso normal, seu IMC eh de ${imc}`)
}else if(imc >= 25 && imc <= 30){
    console.log(`${nome} esta acima do peso, eu IMC eh de ${imc}`)
}
else if(imc >= 30 && imc <= 40){
    console.log(`${nome} esta obeso, seu IMC eh de ${imc}`)
}else{
    console.log(`${nome} esta com obesidade grave, seu IMC eh de ${imc}`)
}
*/
//#endregion

//#region Exercicio 3
/*
var produto = 'Camisa Polo'
const precoEtiqueta = 89.90
var formaPagar = 'Debito' //'Dinheiro' //'Boleto' //'A vista' //'cartao ate 2x' //'Pix'

if(formaPagar === 'Debito'){
    const desconto = precoEtiqueta * 10 / 100
    const preco = precoEtiqueta - desconto
    console.log(`O valor a pagar eh de R$${preco.toFixed(2)}, o valor do desconto no pagamento ${formaPagar} foi de R$${desconto.toFixed(2)}`)
}
else if(formaPagar === 'Dinheiro' || formaPagar === 'Pix'){
    const desconto = precoEtiqueta * 15/100
    const preco = precoEtiqueta - desconto
    console.log(`O valor a pagar eh de R$${preco.toFixed(2)}, o valor do desconto no pagamento ${formaPagar} foi de R$${desconto.toFixed(2)}`)
}else if(formaPagar === 'A vista'){
    const desconto = precoEtiqueta * 15/100
    const preco = precoEtiqueta - desconto
    console.log(`O valor a pagar eh de R$${preco.toFixed(2)}, o valor do desconto no pagamento ${formaPagar} foi de R$${desconto.toFixed(2)}`)
}else if(formaPagar === "cartao ate 2x"){
    const desconto = null
    const preco = precoEtiqueta
    console.log(`O valor a pagar eh de R$${preco.toFixed(2)}, sem desconto no no pagamento em ${formaPagar}`)
}else{
    const acrescimo = precoEtiqueta * 10 / 100
    const preco = precoEtiqueta + acrescimo
    console.log(`O valor a pagar eh de R$${preco.toFixed(2)}, a forma de pagamento ${formaPagar} tem acrescimo de R$${acrescimo.toFixed(2)}`)
}
*/
//#endregion

//#region Exercicio 4
/*
var numero = 10;

console.log(`Meu nome eh "Davi". Estou aprendendo Javascript as ${numero} da manha`);
//#endregion

//#region Exercicio 5
const peso = 97;


let imc = peso / Math.pow(altura, 2);
let anoNascimento = 2024 - idade;

console.log(`${nome} ${sobrenome} tem ${altura}m de altura,
     com ${idade} anos, nasceu no ano de ${anoNascimento}
     e seu IMC é de: ${imc.toFixed(2)}`);
*/
//#endregion

//#region Exercicio 6

let varA = 'A';
let varB = 'B';
let varC = 'C';

//#region resolução errada
//varA = varB;
//varB = varC;
//varC = varA;
//#endregion

[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);

//#endregion

//#region Exercicio 7
//#endregion
