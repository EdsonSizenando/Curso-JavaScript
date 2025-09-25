var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12  ) {
    console.log('Bom Madrugada!')
} else if (hora <= 18) {
    console.log('Boa Tarde!') 
} else if (hora <= 23) {
    console.log('Boa Noite!')
} else if (hora >= 0 && hora < 5 ){
    console.log('Boa Madrugada!')
}


