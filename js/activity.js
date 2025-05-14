document = addEventListener("DOMContentLoaded", function(evento){ 

    valor_evento = localStorage.getItem ("clickou_evento")

    valor_parce = localStorage.getItem ("clickou_parce")

    if (valor_evento == "True") {

        section = document.querySelector(".geral_conteudo");

        pzinho = document.createElement("p");
        pzinho.id = "pzinho";
        pzinho.innerHTML = "Evento confirmado!";
        pzinho.style.fontSize = "1.3vh"

        section.appendChild(pzinho);
    }

    if (valor_parce == "True") {
        section = document.querySelector(".geral_conteudo");

        pzinho = document.createElement("p");
        pzinho.id = "pzinho";
        pzinho.innerHTML = "Parceria confirmada!";
        pzinho.style.fontSize = "1.3vh"

        section.appendChild(pzinho);
    }

})