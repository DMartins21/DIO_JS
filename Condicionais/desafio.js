const precoEtanol = 3.42
const precoGasolina = 5.58

const distanciaKm = 136
const tipoCombustivel = 'Etanol'
var valorGasto = 0
var gastoMedio = 0
var kmPorLitro = 0

if(tipoCombustivel === 'Gasolina'){
    gastoMedio = 12
    kmPorLitro = distanciaKm / gastoMedio
    valorGasto = kmPorLitro * precoGasolina
} else if(tipoCombustivel === 'Etanol'){
    const gastoMedio = 9
    kmPorLitro = distanciaKm / gastoMedio
    valorGasto = kmPorLitro * precoEtanol
}

console.log('Valor gasto R$', valorGasto.toFixed(2))