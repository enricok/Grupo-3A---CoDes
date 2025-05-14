document.addEventListener("DOMContentLoaded", function(event) {
    main = document.querySelector("main");
    sections = main.querySelectorAll(".caixa.geral");
    nav = main.querySelectorAll("nav");
    imgs = nav[0] ? nav[0].querySelectorAll("img") : [];
   
    imgs[0].addEventListener("click", function(event) {
        if (imgs[0].style.border.includes ("0.5rem solid green")) {
            sections[0].style.display = "flex";
            imgs[0].style.border = "none";
        }
        else {
            sections[0].style.display = "none";
            imgs[0].style.border = "0.5rem solid green";
        }
        
    });

    imgs[1].addEventListener("click", function(event) {
        if (imgs[1].style.border.includes ("0.5rem solid green")) {
            sections[0].style.display = "flex";
            sections [1].style.display = "flex";
            imgs[1].style.border = "none";
        }
        else {
            sections[0].style.display = "none";
            sections [1].style.display = "none";
            imgs[1].style.border = "0.5rem solid green";
        }
        
    });

    imgs[2].addEventListener("click", function(event) {
        if (imgs[2].style.border.includes ("0.5rem solid green")) {
            imgs[2].style.border = "none";
        }
        else {
            imgs[2].style.border = "0.5rem solid green";
        }
        
    });

    imgs[3].addEventListener("click", function(event) {
        if (imgs[3].style.border.includes ("0.5rem solid green")) {
            sections[0].style.display = "flex";
            sections [1].style.display = "flex";
            sections [2].style.display = "flex";
            imgs[3].style.border = "none";
        }
        else {
            sections[0].style.display = "none";
            sections [1].style.display = "none";
            sections [2].style.display = "none";
            imgs[3].style.border = "0.5rem solid green";
        }
        
    });
    
});
