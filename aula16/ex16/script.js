let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let resp = document.getElementById('resp')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    // Retorna true se o número for encontrado, false caso contrário.
    return l.includes(Number(n))
}



function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value)) //Adcionando vaores a lista apos as condições

        // Adcionando valor no select, primeiros adicionamos o elemento option (criando elemento de forma dinamica no JS)
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.` // item passa a ter um valor string
        lista.appendChild(item) // adicionando e mostrando na lista select
        resp.innerHTML= '' //limpar o resultado quando adcionar elementos
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' //para esvaziar o campo numerico apos clicar em adicionar
    num.focus() //para o cursor voltar a piscar apos clicar no campo adcionar

}

function finalizar() {
    if (valores.length == 0) {
        window.alert = 'Adicione valores antes de finalizar'
    } else {
        let tot = valores.length // total de elementos do vetor valores, criou a variavel tot = total

        //verificando maior e menor número do vetor
        let maior = valores[0]
        let menor = valores[0]

        let soma = 0
        let media = 0
        
        for (let pos in valores) { //criando a variavel pos na 
        //lista valores
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        resp. innerHTML = '' // zerando a id res
        resp.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados. </p>` // concatenando valores
        resp.innerHTML += `<p>O maior valor informado foi ${maior}.</p> `
        resp.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        resp.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        resp.innerHTML += `<p>A média de todo os valores digitados é ${media}.</p>`

    }


}