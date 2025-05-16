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
                duracao = document.getElementById("duracao").value;

                localStorage.setItem("descricao_parce", `${descricao}`);
                localStorage.setItem("data_parce", `${data}`);
                localStorage.setItem("duracao_parce", `${duracao}`);

                localStorage.setItem ("clickou_parce", "True")
                
                alert("Conteúdo salvo com sucesso!");
    });

    setadireitalink = document.querySelector('a[href="parcerias_select3.html"]');
    if (setadireitalink) {
        setadireitalink.addEventListener("click", function(event) {
            descricao = document.getElementById("descricao").value;
            data = document.getElementById("data").value;
            duracao = document.getElementById("duracao").value;

            if (descricao === "") {
                alert("Preencha o campo de Descrição.");
                event.preventDefault();
            }

            if (data === "") {
                alert("Preencha o campo de Data.");
                event.preventDefault();
            }

            if (duracao === "") {
                alert("Preencha o campo de Duração.");
                event.preventDefault();
            }
        });
    }

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


});

 