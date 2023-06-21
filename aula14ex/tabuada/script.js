function calcular(){
    let numero = document.getElementById('num')
    if(numero.value.length == 0){
        alert('Por favor, digite um número')
    }
    else{
        let n1 = Number(numero.value)
        let res = document.getElementById('caixa')
        res.innerHTML = ''
        for(let c = 1;c <= 15; c++){
            let item = document.createElement('option')
            item.text = `${n1}x${c}=${n1*c}`
            item.value = `opt${c}`
            res.appendChild(item)
        }
    }
}