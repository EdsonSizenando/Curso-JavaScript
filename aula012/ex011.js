var idade = 50
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota')
} else if ( idade < 18 || idade > 65) {
    console.log('voto opcional')
} else {
    console.log('Voto obrigatório')
}

// && representa adição assim com and em python
//  || representa ou assim com or em python