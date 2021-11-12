let frase = 'Meu nome é Diogo Sousa Silva Lopes'
let array = frase.split(' ') //Separa a frase eliminando o espaço como separador
console.log(array)

let frasecom_ = array.join('_')// Junta as palavras separando-as por _
console.log(frasecom_)

console.log(frase.includes('Diogo')) // Verifica se uma palavra existe dentro de uma frase(Sensivel a letras maiusculas)

let array2 = new Array (1,2,3) //Outra forma de criar arrays
console.log(array2)
let array3 = new Array (10) //Criou o arrey com 10 posições, porem sem nenhuma informação 
console.log(array3)

let word = 'Flamengo é o melhor'
let newArray = Array.from(word) //Cria um array com os caracteres de uma palavra, inclusive os espaços
console.log(newArray)