function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formuano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (formuano.value == 0 || Number(formuano.value) > ano ) {
        window.alert('[ERRO] Informe os valores novamente!')
    } else {
    var forsex = document.getElementsByName('sexchoice')
    var idade = ano - Number(formuano.value)
    var genero = 'Homem'
        
            
    }
    
    
}