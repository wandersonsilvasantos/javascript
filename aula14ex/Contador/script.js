function clicou(){
    var numero1 = document.getElementById('vai')
    var numero2 = document.getElementById('ate')
    var passo = document.getElementById('pas')
    var resposta = document.getElementById('res')
    if(numero1.value.length == 0|| numero2.value.length == 0 || passo.value.length == 0 ){
        resposta.innerHTML = 'Impossível contar!'
        alert('[ERRO] Faltam dados!')
    }
    else {
        resposta.innerHTML = 'Contando:<br>'
        var n1 = Number(numero1.value)
        var n2 = Number(numero2.value)
        var pas = Number(passo.value)
        if(pas <= 0){
            pas = 1
            alert('Passo inválido, passo considerado: 1')
        }
        if(n1 < n2){
            for(var c = n1;c <= n2;c += pas){
                resposta.innerHTML += `${c} \u{1F449}`
            }
        }
        else{
            for(var c = n1;c >= n2;c -= pas){
                resposta.innerHTML += `${c} \u{1F449}`
            }
        } 
        resposta.innerHTML += `\u{1F3C1}`
    }
}