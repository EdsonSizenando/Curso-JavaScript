//key = name, idade, street
const user = {
    name: 'Edson',
    age: 30, street: 'Cecilia de Souza'
}

//console.log(user['name'])  // regra apenas para objeto
//console.log(user.name)


for(let key in user) {
    //console.log(user[key])
    console.log(`${key}: ${user[key]}`)

}                