const users = [
    { name: 'Edson', age: 30, contact: '(27) 99910-2682' }, 
    { name: 'Nayara', age: 35, contact: '(27) 99973-6435' },
    { name: 'Mauricio', age: 10, contact: '(27) 99300-45788' },
    { name: 'Mariana', age: 5, contact: '(27) 99899-0303' },
]
// user.forEach( item => { })   arrow function

users.forEach(function(item, index, array) {
    //console.log(item)
    //console.log(index)
    //console.log(array)
    if(item.age < 18) {
        console.log(`O cliente ${item.name}, posição ${index} é menor de idade.`)
    }



})

