let altura = document.getElementById('txtalt')
let peso = document.getElementById('txtpeso')
let resp = document.getElementById('resp')







function calcular() {
let imc = ( Number(peso.value) ) / (Number(altura.value) * Number(altura.value))
let imcformat = imc.toFixed(2)

if (Number(altura.value) == 0 && Number(peso.value) == 0 ) {
    window.alert('Valor Inválido. Digite Novamente')


} else if (Number(imcformat) < 18) {
    resp.innerHTML += `Classificado como MAGREZA`
    resp.push(Text(resp.value))

    

}

resp.innerHTML = `O valor do seu IMC corresponde a ${imcformat}` 

}

