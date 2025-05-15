document.addEventListener("DOMContentLoaded", function () {
    nome = localStorage.getItem("perfil_nome");

    julia = document.querySelector(".julia")

    julia.innerHTML = nome
})