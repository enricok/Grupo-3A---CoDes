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

<<<<<<< HEAD
    inputData = document.getElementById("data");
    inputData.addEventListener("input", function(evento) {
        valor = evento.target.value;
        valor = valor.replace(/\D/g, "");

        if (valor.length >= 3 && valor.length <= 4) {
            valor = valor.slice(0, 2) + "/" + valor.slice(2);
        } else if (valor.length > 4 && valor.length <= 8) {
            valor = valor.slice(0, 2) + "/" + valor.slice(2, 4) + "/" + valor.slice(4);
        } else if (valor.length > 8) {
            valor = valor.slice(0, 2) + "/" + valor.slice(2, 4) + "/" + valor.slice(4, 8);
        }

        evento.target.value = valor;
    });



    inputDuracao = document.getElementById("hora");

    inputDuracao.addEventListener("input", function(evento) {
        valor = evento.target.value;
        valor = valor.replace(/\D/g, "");
    
        if (valor.length >= 3) {
            horas = valor.slice(0, 2);
            minutos = valor.slice(2, 4);
    
            if (horas.length === 2 && (horas[0] > "2" || (horas[0] === "2" && horas[1] > "3"))) {
                horas = "23";
            }
    
            if (minutos.length === 2 && (minutos[0] > "5")) {
                minutos = "59";
            }
    
            valor = horas + ":" + minutos;
        }
    
        evento.target.value = valor.slice(0, 5);
    });

    setadireitalink = document.querySelector('a[href="eventos_select3.html"]');
=======
    setadireitalink = document.querySelector('a[href = "eventos_select3.html"]');
>>>>>>> 0435119893e40d4cf5dd74538f3398fd8b536ee1
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
<<<<<<< HEAD
                alert("Preencha o campo da Hora.");
=======
                alert("Preencha o campo de Hora.");
>>>>>>> 0435119893e40d4cf5dd74538f3398fd8b536ee1
                event.preventDefault();
            }

            if (local === "") {
<<<<<<< HEAD
                alert("Preencha o campo do Local.");
=======
                alert("Preencha o campo de Local.");
>>>>>>> 0435119893e40d4cf5dd74538f3398fd8b536ee1
                event.preventDefault();
            }
        });
    }

});
 

