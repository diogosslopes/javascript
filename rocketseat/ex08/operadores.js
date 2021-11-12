const person = {
    name: 'Diogo',
    age: 34
}

delete person.age //Apaga uma propriedade de um objeto

console.log(person)

let pao = false
let queijo = true

console.log(!pao) // nagando o valor da variavel, era false e passou a ser true

let age = 18

const dirigir = age >=18 ? 'Pode dirigir' : 'Não pode dirigir' // if simplificado. Primeiro bloco é a condição e os demais são as alternativas
console.log(dirigir)