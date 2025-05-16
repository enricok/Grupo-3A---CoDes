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

    inputData = document.getElementById("data");
    inputData.addEventListener("input", function(evento) {
        valor = evento.target.value;
        valor = valor.replace(/\D/g, ""); 
        dia = valor.slice(0, 2);
        mes = valor.slice(2, 4);
        ano = valor.slice(4, 8);
    
        if (dia.length === 2 && (dia[0] > "3" || (dia[0] === "3" && dia[1] > "1"))) {
            dia = "31";
        }
    
        if (mes.length === 2 && (mes[0] > "1" || (mes[0] === "1" && mes[1] > "2"))) {
            mes = "12";
        }
    
        valorFormatado = dia;
        if (mes.length > 0) {
            valorFormatado += "/" + mes;
        }
        if (ano.length > 0) {
            valorFormatado += "/" + ano;
        }
    
        evento.target.value = valorFormatado;
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
                alert("Preencha o campo da Hora.");
                event.preventDefault();
            }

            if (local === "") {
                alert("Preencha o campo do Local.");
                event.preventDefault();
            }
        });
    }

});
 

