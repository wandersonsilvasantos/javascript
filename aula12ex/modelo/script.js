function clicou(){
    var img = document.getElementById('perfil')
    var sexo = document.getElementsByName('sexn')
    var anoatual = new Date ()
    var anoatt = anoatual.getFullYear()
    var an = document.getElementById('anon')
    var ano = Number(an.value)
    var idade = anoatt - ano
    var res = document.getElementById('resp')
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if(idade < 16){
        alert('[ERRO] idade inválida')
    }
    else{
    if(sexo[0].checked){
        var genero = 'homem'
        if(idade < 21){
            img.setAttribute('src','adm.jpg')
        }
        else if(idade < 60){
            img.setAttribute('src','adum.jpg')
        }
        else{
            img.setAttribute('src','vm.jpg')
        }
    }
    else{
        var genero = 'mulher'
        if(idade < 21){
            img.setAttribute('src','adf.jpg')
        }
        else if (idade < 60){
            img.setAttribute('src','aduf.jpg')
        }
        else{
            img.setAttribute('src','vf.jpg')
        }
    }

    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos <br>`
    res.appendChild(img)
    }

}