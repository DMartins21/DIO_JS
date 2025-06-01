const numero = prompt('digite um numero:')
const numeroTitulo = document.getElementById('numero-titulo')

const textoUser = prompt('digite o texto da pagina')
const texto = document.getElementById('texto')

numeroTitulo.innerHTML = numero
texto.innerHTML = `<p>${textoUser}</p>`