const AparecerTabela = document.querySelector('.img-valores')
const escuro = document.querySelector('.escuro')
function tabela() {

    AparecerTabela.style.left = "30%"
    AparecerTabela.style.transition = "1s ease-in-out"
    escuro.style.visibility = "visible"
}


function desaparecer() {
    AparecerTabela.style.left = "-500px"
    AparecerTabela.style.transition = "1s ease-in-out"
    escuro.style.visibility = "hidden"
    escuro.style.transition = "1s ease-in-out"
}