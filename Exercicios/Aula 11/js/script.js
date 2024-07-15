// Vamos capturar valores do usuario atráves do comando windom.prompt 
// Converter os valores em numericos e calcular a soma deles
// Opcional - Mostrar valores de soma, multiplicação e divisão desses valores

let num1 = window.prompt('Digite o primeiro número:');
let num2 = window.prompt('Digite o segundo número:');

let resultSoma = parseInt(num1) + parseInt(num2);
let resultMult = num1 * num2;
let resultDivision = num1 / num2;

window.alert(`O resultado da soma foi ${resultSoma}.`);
window.alert(`O resultado da divisão foi ${resultDivision}`);
window.alert(`O resultado da multiplicação foi ${resultMult}`);
