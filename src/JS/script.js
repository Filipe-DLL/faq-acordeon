const listaDuvida = document.querySelectorAll(".duvida")

listaDuvida.forEach(element => {
    let duvidaHeader = element.querySelector(".duvida-header")

    duvidaHeader.addEventListener("click", event => {

        if (ativo === element) {
            element.classList.remove("exibir")
            return
        }

        if (ativo) {
            ativo.classList.remove("exibir")
        }

        element.classList.add("exibir")
    })
});