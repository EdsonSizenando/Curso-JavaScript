let altura = document.getElementById('txtalt')
let peso = document.getElementById('txtpeso')
let resp = document.getElementById('resp')
let categoria = ['MAGREZA', 'NORMAL', 'SOBREPESO', 'OBESIDADE', 'OBESIDADE GRAVE']




function calcular() {

let imc = ( Number(peso.value) ) / (Number(altura.value) * Number(altura.value))
let imcformat = imc.toFixed(2)


if (Number(altura.value) == 0 && Number(peso.value) == 0 ) {
    window.alert('Valor Inválido. Digite Novamente')


} else if (imcformat < 18.5) {
    categoria = categoria[0]
    
} else if (imcformat >= 18.5 && imcformat <= 24.9) {
    categoria = categoria[1]

} else if (imcformat >= 25 && imcformat <= 29.9) {
    categoria = categoria[2]

} else if (imcformat <=30 && imcformat <= 39.9) {
    categoria = categoria[3]

} else {
    categoria = categoria[4]
}


resp.innerHTML = `O valor do seu IMC corresponde a ${imcformat} classificado como ${categoria}.`


}


function limpar() {

    resp.innerHTML = ''
    altura.value = ''
    peso.value = ''
    altura.focus()
    peso.focus()
}

