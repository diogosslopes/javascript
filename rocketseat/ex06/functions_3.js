//Função construtora

function Person(name, age){
    this.name = name
    this.age = age
}

const diogo = new Person ('Diogo', 34)
const pamela = new Person ('Pâmela', 30) //Ao utilizar a palavra new, ele transforma a variavel em um ojeto, de acordo com o que fo definido dentro da função.

console.log(diogo)
console.log(pamela)
console.log(typeof(diogo))