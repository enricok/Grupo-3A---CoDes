document.addEventListener("DOMContentLoaded", function(evento){ 

    section = document.querySelector (".div");

    botao = section.querySelector("button");

    count = 0

    botao.addEventListener ("click", function (evento) {
        alert ("Confirmado!");
        let count = parseInt(localStorage.getItem("clickou"));
        count += 5
        localStorage.setItem("clickou", `${count}`);
    })

    p_descricao = document.querySelector (".descricao");
    p_data = document.querySelector (".data");
    p_horario = document.querySelector (".horario");
    p_local = document.querySelector (".local");

    descricao = localStorage.getItem('descricao');
    data = localStorage.getItem('data');
    horario = localStorage.getItem('hora');
    local = localStorage.getItem('local');

    p_descricao.innerHTML = `Descrição: ${descricao}`;
    p_data.innerHTML = `Data do evento: ${data}`;
    p_horario.innerHTML = `Horário agendado: ${horario}`;
    p_local.innerHTML = `Local: ${local}`;

})