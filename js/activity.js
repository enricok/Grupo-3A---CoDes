document.addEventListener("DOMContentLoaded", function(evento) {

    /*
    valor_evento = localStorage.getItem("clickou_evento");
    valor_parce = localStorage.getItem("clickou_parce");

    if (valor_evento == "True") {
        section = document.querySelector(".geral_conteudo");
        pzinho = document.createElement("p");
        pzinho.id = "pzinho";
        pzinho.innerHTML = "Evento confirmado!";
        section.appendChild(pzinho);
    }

    if (valor_parce == "True") {
        const section = document.querySelector(".geral_conteudo");
        pzinho = document.createElement("p");
        pzinho.id = "pzinho";
        pzinho.innerHTML = "Parceria confirmada!";
        pzinho.style.fontSize = "1.3vh";
        section.appendChild(pzinho);
    }
    */
   
    dia = localStorage.getItem ("data")

    ul = document.querySelector("ul");

    lizinho = document.createElement("li");
    lizinho.id = "lizinho";
    lizinho.innerHTML = `Lombar: ${dia}`;
    lizinho.style.fontSize = "1.3vh";
    ul.appendChild(lizinho);

    gear = document.querySelector('footer nav a img[src*="gear.png"]');

    sidebar = null;
    ta_aberto = false;

    main = document.querySelector('main');

        gear.addEventListener("click", function(event) {

            if (sidebar == null) {
                sidebar = document.createElement("div");
                sidebar.id = "sidebar";
                sidebar.style.position = "fixed";
                sidebar.style.top = "0";
                sidebar.style.left = "-250px";
                sidebar.style.width = "16rem";
                sidebar.style.height = "100vh";
                sidebar.style.backgroundColor = "#F2C6CF"; 
                sidebar.style.borderRight = "0.3rem solid #D96C9F";
                sidebar.style.display = "flex";
                sidebar.style.flexDirection = "column";
                sidebar.style.padding = "2rem 1rem";
                sidebar.style.fontFamily ='"Nunito", sans-serif';
                sidebar.style.fontWeight = "700";
                sidebar.style.color = "#000000";
                sidebar.style.transition = "left 0.3s ease-in-out"; // importante
                sidebar.style.zIndex = "1000";
                sidebar.style.boxSizing = "border-box";
                sidebar.style.overflow = "auto";
                ;

                title = document.createElement("h2");
                title.innerHTML = "Ajustes";
                title.style.paddingBottom = "4rem";
                title.style.fontSize = "2rem";
                title.style.margin = "0 0 2rem 0";
                title.style.textAlign = "center";
                title.style.position = "static"; 
                title.style.transform = "none"; 
                title.style.zIndex = "1"; 
                title.style.paddingBottom = "1rem"; 
                
                sidebar.appendChild(title);

                navItem1 = document.createElement("a");
                navItem1.href = "#";
                navItem1.innerHTML = "Perfil";
                
                navItem1.style.color = "#000000";
                navItem1.style.textDecoration = "none";
                navItem1.style.fontSize = "1.5rem";
                navItem1.style.margi =  "1rem 0";
                navItem1.style.padding = "0.5rem";
                navItem1.style.borderRadius = "0.5rem";
                navItem1.style.position = "static"; 
                navItem1.style.zIndex = "1";

                navItem2 = document.createElement("a");
                navItem2.href = "#";
                navItem2.innerHTML = "Configurações";
                
                navItem2.style.color = "#000000";
                navItem2.style.textDecoration = "none";
                navItem2.style.fontSize = "1.5rem";
                navItem2.style.margin =  "1rem 0";
                navItem2.style.padding = "0.5rem";
                navItem2.style.borderRadius = "0.5rem";
                navItem2.style.position = "static"; 
                navItem2.style.zIndex = "1";

                navItem1.addEventListener("mouseover", function(evento) {
                    navItem1.style.backgroundColor = "#F29F05";
                });
                    
                navItem1.addEventListener("mouseout", function(evento) {
                    navItem1.style.backgroundColor = "transparent";
                });

                navItem2.addEventListener("mouseover", function(evento) {
                    navItem2.style.backgroundColor = "#F29F05";
                });
                    
                navItem2.addEventListener("mouseout", function(evento) {
                    navItem2.style.backgroundColor = "transparent";
                });
                    
                sidebar.appendChild(navItem1);

                sidebar.appendChild(navItem2);

                closeButton = document.createElement("button");
                closeButton.innerHTML = "Fechar";
                closeButton.style.marginTop = "auto";
                closeButton.style.padding = "1rem";
                closeButton.style.backgroundColor = "#D96C9F";
                closeButton.style.color = "#FFFFFF";
                closeButton.style.borderRadius = "0.5rem";
                closeButton.style.fontSize = "1.2rem";
                closeButton.style.cursor = "pointer";
                closeButton.style.border = "none"
                closeButton.style.border = "none"; 
                closeButton.style.position = "static"; 
                closeButton.style.zIndex = "1"; 

                closeButton.addEventListener("click", function(evento) {
                    ta_aberto = false;
                    sidebar.style.left = "-250px";
                });

                sidebar.appendChild(closeButton);

                document.body.appendChild(sidebar);
            }

            ta_aberto = !ta_aberto;
            sidebar.style.left = ta_aberto ? "0" : "-250px";
        });
    })