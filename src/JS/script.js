const listaDuvida = document.querySelectorAll(".duvida")
console.log(listaDuvida);

listaDuvida.forEach(element => {
    let duvidaHeader = element.querySelector(".duvida-header")

    duvidaHeader.addEventListener("click", event => {
        listaDuvida[0].classList.remove("exibir")
        listaDuvida[1].classList.remove("exibir")
        listaDuvida[2].classList.remove("exibir")
        element.classList.add("exibir")
    })
});