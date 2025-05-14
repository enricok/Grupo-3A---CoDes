document.addEventListener("DOMContentLoaded", function(evento){ 

    saveButton = document.createElement("button");
    saveButton.id = "saveButton";
    saveButton.innerHTML = "Salvar conteúdos";
    saveButton.style.padding = "1rem"

    section = document.querySelector(".div_input");
    section.appendChild(saveButton);

    saveButton.addEventListener("click", function(event) {

                descricao = document.getElementById("descricao").value;
                data = document.getElementById("data").value;
                hora = document.getElementById("hora").value;
                local = document.getElementById("local").value;

                localStorage.setItem("descricao", `${descricao}`);
                localStorage.setItem("data", `${data}`);
                localStorage.setItem("hora", `${hora}`);
                localStorage.setItem("local", `${local}`);

                localStorage.setItem ("clickou_evento", "True")
                
                alert("Conteúdo salvo com sucesso!");
    });
 
})

