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