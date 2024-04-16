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