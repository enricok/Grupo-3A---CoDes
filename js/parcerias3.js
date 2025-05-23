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
    p_duracao = document.querySelector (".duracao");

    descricao = localStorage.getItem('descricao_parce');
    data = localStorage.getItem('data_parce');
    duracao = localStorage.getItem('duracao_parce');

    p_descricao.innerHTML = `Descrição: ${descricao}`;
    p_duracao.innerHTML = `Duração: ${duracao}`;
     p_data.innerHTML = `Data de emissão: ${data}`;

})