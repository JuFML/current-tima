function carregar() {

var msg = document.querySelector ('.msg')
var img = document.querySelector ('.photo')
var data = new Date()
var hora = 22
//data.getHours()
msg.innerHTML = "Agora são " +hora+ " Horas"

if (hora >= 0 && hora <= 12) {
    img.src = 'assets/img/fotomanha.png'
    document.body.style.background = '#C4CECB'
    document.querySelector('footer').style.color = '#000'

    } else if (hora > 12 && hora <= 18) {
        img.src = 'assets/img/fototarde.png'
        document.body.style.background = '#B16C2B'
    }
    else {
        img.src = 'assets/img/fotonoite.png'
        document.body.style.background = '#033540'
    }
}
