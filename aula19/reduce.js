/*

Reduce (Reduzir o Array a um único valor)
- Reduz um array inteiro a um  único valor
    - Você tem acesso a 4 dados:
     -Acumulador
     -Valor atual
     -Posição atual
     -Array Completo


*/

// Qual sera o faturamento, se vendermos todo o estoque


const produtos = [
    {
     id:1, nome: "Smartphone Galaxy S21",
     preco: 3999.99, 
     temDesconto: true, 
     quantidade: 1
    },
    
    {
     id: 2, 
     nome: "Notebook Dell Inspiron", 
     preco: 4500.00, 
     temDesconto: false, 
     quantidade: 3 
    }, 
    
    {
    id: 3, 
    nome: "Smart TV LG 55", 
    preco: 2799.00, 
    temDesconto: true, 
    quantidade: 3 
    }, 
    
    {
    id: 4, 
    nome: "Fone de Ouvid JBL", 
    preco: 299.90, 
    temDesconto: false, 
    quantidade: 2 
    }, 
    
    {
    id: 5 , 
    nome: "Câmera DSLR Canon", 
    preco: 3200.00, 
    temDesconto: true, 
    quantidade: 1
    }, 
    
    {
    id: 6, 
    nome: "Tablet iPad Air", 
    preco: 4199.00, 
    temDesconto: false, 
    quantidade: 8 
    }, 
    
    {
    id: 7, 
    nome: "Console PlayStation 5", 
    preco: 4699.00, 
    temDesconto: true, 
    quantidade: 2 
    }, 
    
    {
    id: 8, 
    nome: "Smartwatch Apple Watch", 
    preco: 2499.00, 
    temDesconto: false, 
    quantidade: 7 
    }, 
    
    {
    id: 9, 
    nome: "Impressora HP Multifuncional", 
    preco: 599.90, 
    temDesconto: true, 
    quantidade: 5 
    }, 
    
    {
    id: 10, 
    nome: "Caixa de som Portátil ", 
    preco: 1000.00, 
    temDesconto: false, 
    quantidade: 3
}
];

const novosProdutos = produtos.map( produto => {
    // ? = ternario = if    : = else
    const novoPreco = produto.temDesconto ? produto.preco * 0.9 : produto.preco

    return {
        id: produto.id,
        nome: produto.nome,
        preco: novoPreco.toLocaleString('pt-br', {
            style: 'currency', currency: 'BRL'
        }),
        quantidade: produto.quantidade


    }

} )


const totalVendas = produtos.reduce((acumulador, produto) => {

    return acumulador + (produto.preco * produto.quantidade)

}, 0) // o valor 0 informa onde começa o contador

console.log(totalVendas.toLocaleString('pt-br', {
            style: 'currency', currency: 'BRL'
        }),
    )