document = addEventListener("DOMContentLoaded", function(evento){ 

    p_descricao = document.querySelector (".descricao")
    p_data = document.querySelector (".data")
    p_horario = document.querySelector (".horario")
    p_local = document.querySelector (".local")

    descricao = localStorage.getItem('descricao')
    data = localStorage.getItem('data')
    horario = localStorage.getItem('hora')
    local = localStorage.getItem('local')

    p_descricao.innerHTML = `Descrição: ${descricao}`
    p_data.innerHTML = `Data: ${data}`
    p_horario.innerHTML = `Horário: ${horario}`
    p_local.innerHTML = `Local: ${local}`

})