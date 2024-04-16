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