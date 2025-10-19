/*

DOMINANDO ARRAYS NO JAVASCRIPT

Map(Mapear item por item no array)
   - Criar um novo array com a mesma quantidade de itens do array original.
   - O novo array você pode alterar o que quiser em relação ao array original.
   - Você tem acesso a 3 dados:
       - item por item do array
       - posição atual do array
       - Array completo
*/

const numeros = [1,2,3,4,5,8,10]


// numero = item   index = posição  arraycompleto = arraycompleto  ou vc pega somente a informção q preferir ex ((index))

const dobro = numeros.map((numero) => {
    return numero * 4
} )

console.log(dobro)