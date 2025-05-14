document.addEventListener("DOMContentLoaded", function(evento){ 

    section = document.querySelector (".div")

    botao = section.querySelector("button")

    botao.addEventListener ("click", function (evento) {
        alert ("Confirmado!")
    })

    p_descricao = document.querySelector (".descricao")
    p_data = document.querySelector (".data")
    p_duracao = document.querySelector (".duracao")

    descricao = localStorage.getItem('descricao_parce')
    data = localStorage.getItem('data_parce')
    duracao = localStorage.getItem('duracao_parce')

    p_descricao.innerHTML = `Descrição: ${descricao}`
    p_duracao.innerHTML = `Duração: ${duracao}`
     p_data.innerHTML = `Data de emissão: ${data}`

})