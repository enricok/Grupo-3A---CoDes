document.addEventListener("DOMContentLoaded", function () {
    count = 0

    savedFoto = localStorage.getItem("perfil_foto");
    
    dia = localStorage.getItem("data");
    ul = document.querySelector("ul");
    lizinho = document.createElement("li");
    lizinho.id = "lizinho";
    lizinho.innerHTML = `Lombar: ${dia}`;
    lizinho.style.fontSize = "1.3vh";
    ul.appendChild(lizinho);

    img_load = document.querySelector('img[src="img/load.png"]');
    if (img_load) {
        container = document.createElement("div");
        container.id = "progressContainer";
        container.style.position = "relative";
        container.style.width = "100%";
        container.style.height = "2rem";
        container.style.backgroundColor = "#e0e0e0";
        container.style.borderRadius = "0.5rem";
        container.style.margin = "0 auto";
        container.style.marginBottom = "1rem";

        bar = document.createElement("div");
        bar.id = "progressBar";
        bar.style.position = "absolute";
        bar.style.height = "100%";
        bar.style.backgroundColor = "#D96C9F";
        bar.style.borderRadius = "0.5rem";
        bar.style.width = "0%";
        bar.style.transition = "width 0.3s ease-in-out";

        container.appendChild(bar);

        img_load.parentNode.replaceChild(container, img_load);

        progress = 0

        count = localStorage.getItem ('clickou')

        progress += count
        
        bar.style.width = `${progress}%`
    }

    gear = document.querySelector('footer nav a img[src*="gear.png"]');

    sidebar = null;
    ta_aberto = false;

    main = document.querySelector("main");

    gear.addEventListener("click", function () {
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
            sidebar.style.fontFamily = '"Nunito", sans-serif';
            sidebar.style.fontWeight = "700";
            sidebar.style.color = "#000000";
            sidebar.style.transition = "left 0.3s ease-in-out";
            sidebar.style.zIndex = "1000";
            sidebar.style.boxSizing = "border-box";
            sidebar.style.overflow = "auto";

            title = document.createElement("h2");
            title.style.paddingBottom = "1rem";
            title.style.fontSize = "2rem";
            title.style.textAlign = "center";

            imgJ = document.createElement("img");
            imgJ.src = savedFoto || "img/letter-j.png";
            imgJ.alt = "Letra J";
            imgJ.style.width = "4rem";
            imgJ.style.margin = "0 auto 2rem auto";
            imgJ.style.display = "block";

            navItem1 = document.createElement("a");
            navItem1.href = "#";
            navItem1.innerHTML = "Perfil";
            navItem1.style.color = "#000";
            navItem1.style.textDecoration = "none";
            navItem1.style.fontSize = "1.5rem";
            navItem1.style.margin = "1rem 0";
            navItem1.style.padding = "0.5rem";
            navItem1.style.borderRadius = "0.5rem";

            navItem2 = document.createElement("a");
            navItem2.href = "#";
            navItem2.innerHTML = "Configurações";
            navItem2.style.color = "#000";
            navItem2.style.textDecoration = "none";
            navItem2.style.fontSize = "1.5rem";
            navItem2.style.margin = "1rem 0";
            navItem2.style.padding = "0.5rem";
            navItem2.style.borderRadius = "0.5rem";

            navItem1.addEventListener("mouseover", () => navItem1.style.backgroundColor = "#F29F05");
            navItem1.addEventListener("mouseout", () => navItem1.style.backgroundColor = "transparent");
            navItem2.addEventListener("mouseover", () => navItem2.style.backgroundColor = "#F29F05");
            navItem2.addEventListener("mouseout", () => navItem2.style.backgroundColor = "transparent");

            closeButton = document.createElement("button");
            closeButton.innerHTML = "Fechar";
            closeButton.style.marginTop = "auto";
            closeButton.style.padding = "1rem";
            closeButton.style.backgroundColor = "#D96C9F";
            closeButton.style.color = "#FFF";
            closeButton.style.borderRadius = "0.5rem";
            closeButton.style.fontSize = "1.2rem";
            closeButton.style.cursor = "pointer";
            closeButton.style.border = "none";

            closeButton.addEventListener("click", function () {
                ta_aberto = false;
                sidebar.style.left = "-250px";
            });

            sidebar.appendChild(title);
            sidebar.appendChild(imgJ);
            sidebar.appendChild(navItem1);
            sidebar.appendChild(navItem2);
            sidebar.appendChild(closeButton);
            document.body.appendChild(sidebar);

            popup = document.createElement("div");
            popup.id = "perfilPopup";
            popup.style.display = "none";
            popup.style.position = "fixed";
            popup.style.top = "0";
            popup.style.left = "0";
            popup.style.width = "100vw";
            popup.style.height = "100vh";
            popup.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
            popup.style.zIndex = "2000";
            popup.style.display = "flex";
            popup.style.justifyContent = "center";
            popup.style.alignItems = "center";

            popupContent = document.createElement("div");
            popupContent.style.backgroundColor = "#fff";
            popupContent.style.padding = "4rem";
            popupContent.style.borderRadius = "1rem";
            popupContent.style.textAlign = "center";
            popupContent.style.width = "40rem";

            popupContent.innerHTML = `
                <h2>Editar Perfil</h2>
                <label for="novoNome"></label><br>
                <input type="text" id="novoNome" style="margin-bottom:1rem;" placeholder="Nome:"><br>
                <label for="fotoInput"></label><br>
                <input type="file" accept="image/*" capture="user" id="fotoInput"><br><br>
                <button id="salvarPerfil">Salvar</button>
                <button id="fecharPopup" style="margin-left: 1rem;">Fechar</button>
            `;

            popup.appendChild(popupContent);
            document.body.appendChild(popup);

            navItem1.addEventListener("click", function () {
                document.getElementById("perfilPopup").style.display = "flex";
            });

            document.addEventListener("click", function (evento) {
                if (evento.target.id === "fecharPopup") {
                    document.getElementById("perfilPopup").style.display = "none";
                }

                if (evento.target.id === "salvarPerfil") {
                    nome = document.getElementById("novoNome").value;
                    foto = document.getElementById("fotoInput").files[0];
                    fotoInput = document.getElementById("fotoInput");
                    foto = fotoInput.files[0];
                    
                    if (nome) {
                        localStorage.setItem("perfil_nome", nome);
                    }

                    if (foto) {
                        reader = new FileReader();
                        reader.onload = function (evento) {
                            localStorage.setItem("perfil_foto", evento.target.result);
                            imgSidebar = document.querySelector("#sidebar img");
                            if (imgSidebar) imgSidebar.src = evento.target.result;
                        };
                        reader.readAsDataURL(foto);
                    }

                    document.getElementById("perfilPopup").style.display = "none";
                }
            });
        }

        ta_aberto = !ta_aberto;
        sidebar.style.left = ta_aberto ? "0" : "-250px";
    });

});
