function contar() {
   let inicio = document.getElementById('txti')
   let fim = document.getElementById('txtf')
   let passo = document.getElementById('txtp')
   let res = document.getElementById('resp')

   if (inicio.value.length == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
    res.innerHTML = 'Impossivel Contar'
    //window.alert('[ERRO] Faltam dados!')
   } else {
        res.innerHTML = 'Contando... <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo Inválido! Considerando PASSO 1.')
            p = 1
        }
      
        if (i < f){
            //contagem crescente
            for (let c = 1 ; c <= f ; c += p) {
                res.innerHTML += `${c}  \u{1F499}`
            }
            
        } else {
            //contagem regressiva
            for (let c = i ; c >= f ; c -= p) {
                res.innerHTML += `${c}  \u{1F499}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
    

}