function meuEscopo(){
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')

    const pessoas = []
    
    function recebeEventoForm(evento)
    {
        evento.preventDefault()

        /* `const nome = form.querySelector('.nome')` is selecting the element with the class name
        'nome' within the form element. It is using the `querySelector` method to find the first
        element that matches the specified CSS selector '.nome' within the form element and storing
        it in the constant variable `nome`. */
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')
        
        const pessoa ={
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        }


        pessoas.push(pessoa)
      
        resultado.innerHTML += `<p>${nome.value},${sobrenome.value},
         ${peso.value}, ${altura.value}</p>`

    }
        form.addEventListener('submit', recebeEventoForm)
}        
meuEscopo()