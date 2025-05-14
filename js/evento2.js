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

    setadireitalink = document.querySelector('a[href = "eventos_select3.html"]');
    if (setadireitalink) {
        setadireitalink.addEventListener("click", function(event) {
            descricao = document.getElementById("descricao").value;
            data = document.getElementById("data").value;
            hora = document.getElementById("hora").value;
            local = document.getElementById("local").value;

            if (descricao === "") {
                alert("Preencha o campo de Descrição.");
                event.preventDefault();
            }

            if (data === "") {
                alert("Preencha o campo de Data.");
                event.preventDefault();
            }

            if (hora === "") {
                alert("Preencha o campo de Hora.");
                event.preventDefault();
            }

            if (local === "") {
                alert("Preencha o campo de Local.");
                event.preventDefault();
            }
        });
    }

});
 

