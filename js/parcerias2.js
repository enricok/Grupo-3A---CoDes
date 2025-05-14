document.addEventListener("DOMContentLoaded", function(evento){ 

    saveButton = document.createElement("button");
    saveButton.id = "saveButton";
    saveButton.innerHTML = "Salvar conteúdos";
    saveButton.style.padding = "1rem"

    section = document.querySelector(".div_input");
    section.appendChild(saveButton);

    saveButton.addEventListener("click", function(event) {

                descricao = document.getElementById("descricao").value,
                data = document.getElementById("data").value,
                duracao = document.getElementById("duracao").value,

                localStorage.setItem("descricao_parce", `${descricao}`);
                localStorage.setItem("data_parce", `${data}`);
                localStorage.setItem("duracao_parce", `${duracao}`);

                localStorage.setItem ("clickou_parce", "True")
                
                alert("Conteúdo salvo com sucesso!");
    });
 
})