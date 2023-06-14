function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerText =(`Agora são ${hora} horas`)
    if(hora>=0 && hora <= 12){
        img.src = ('manha.jpg')
        document.body.style.background = '#dadfe2'
    }
    else if(hora > 12 && hora < 18){
        img.src = ('tarde.jpg')
        document.body.style.background = '#f1a366'
    }
    else{
        img.src = ('noite.jpg')
        document.body.style.background = '#07273e'
    }

}