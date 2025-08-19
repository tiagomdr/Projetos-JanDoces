const AparecerTabela = document.querySelector('.img-valores')
const escuro = document.querySelector('.escuro')
function tabela() {

    if(window.innerWidth <= 768) {
        AparecerTabela.style.left = "15%"
    }else {
         AparecerTabela.style.left = "40%"
    }
    
    AparecerTabela.style.transition = "1s ease-in-out"
    escuro.style.visibility = "visible"
}


function desaparecer() {
    AparecerTabela.style.left = "-500px"
    AparecerTabela.style.transition = "1s ease-in-out"
    escuro.style.visibility = "hidden"
    escuro.style.transition = "1s ease-in-out"
}


function enviarWhatsapp() {
    const nome = document.querySelector('#nome').value
    const email = document.querySelector('#email').value
    const select = document.querySelector('select').value
    const whatsapp = document.querySelector('#whatsapp').value

    const msg  = `Olá! Me chamo ${nome}. Gostaria de solicitar um    ${select}\nContato:${whatsapp}\nEmail:${email}`
    const numero = '53997098651'

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`

    window.open(url, '_blank')
}