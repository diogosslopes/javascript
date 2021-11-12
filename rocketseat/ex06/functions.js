let techs = ['html', 'css', 'js']

//adicionar um item no fim do array
techs.push('nosejs')

//adicionar no começo do array
techs.unshift('sql')

//remover do fim do array
//techs.pop()

//remover do começo do array
//techs.shift()

//pegar somente alguns elementos do array
//console.log(techs.slice(1,3))// primeiro numero é o inicio e segundo é o fim

//remover 1 ou mais itens em qualquer posição do array
//techs.splice(1,2)//primeiro numero representa a posição do primeiro item a ser apagado e o segundo representa a posição do ultimo a ser apagado, então ele irá apagar de x a y no exemplo de 1 a 3

//encontrar a posição de um elemento no array
let index = techs.indexOf('css')

console.log(index)
console.log(techs)