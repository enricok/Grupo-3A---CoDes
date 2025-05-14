document = addEventListener("DOMContentLoaded", function(evento){ 

    saveButton = document.createElement("button");
    saveButton.id = "saveButton";
    saveButton.innerHTML = "Salvar Eventos";
    saveButton.style.padding = "1rem"

    section = document.querySelector(".div_input");
    section.appendChild(saveButton);

    saveButton.addEventListener("click", function(event) {

                descricao = document.getElementById("descricao").value,
                data = document.getElementById("data").value,
                hora = document.getElementById("hora").value,
                local = document.getElementById("local").value

                localStorage.setItem("descricao", JSON.stringify(descricao));
                localStorage.setItem("data", JSON.stringify(data));
                localStorage.setItem("hora", JSON.stringify(hora));
                localStorage.setItem("local", JSON.stringify(local));
                
                alert("Evento salvo com sucesso!");
    });

})

