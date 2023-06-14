var hora = new Date()
var agora = hora.getHours()
if(agora < 12){
    console.log(`São exatamente ${agora} horas da manhâ, Bom dia!`)
}
else if(agora > 12 & agora < 18){
    console.log(`São exatamente ${agora} horas da tarde, boa tarde!`)
}
else{
    console.log(`São exatamente ${agora} horas da noite, boa noite!`)
}
