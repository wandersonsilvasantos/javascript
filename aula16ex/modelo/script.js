
let numvet = []
function adicionou(){
    let numer = document.getElementById('num')
    let numero = Number(numer.value)
    if(numero.length == 0 || numero > 100 || numero <= 0){
        alert('Número inválido')
    }
    else{
        if(numero == numvet){
            alert('Número já existente')
        }
        else{
        numvet.push(numero)
        let lista = document.getElementById('lis')
        let resp =  document.createElement('option')
        resp.text = `Valor ${numero} adicionado`
        lista.appendChild(resp)
    }
    }
}
function finalizou(){
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let p3 = document.createElement('p')
    let p4 = document.createElement('p')
    let p5 = document.createElement('p')
    p1.text = `Ao todo, temos ${numvet.length} números cadastrados`
    p2.text = `O maior valor informado foi`
    p3.text = `O menor valor informado foi`
    p4.text = `Somando todos os valores, temos`
    p5.text = `A média dos valores digitados é`
    let resposta = document.getElementById('res') 
    resposta.appendChild(p1)
}