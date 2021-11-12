//type conversion vs type coersion


console.log('5' + 5) // O JS faz a conversão forçada do 5 em string para que o programa não de erro (Type coersion)

console.log(Number('5') + 5) // Nós fizemos a conversão através da funcionalidade "Number" (Type conversion)

let string = '123'
let number = 321

console.log(Number(string)) // Converte string em numero
console.log(String(number).length) // Converte numero em string - Para descobrir quantos digitos tem um numero temos que transforma-lo em string antes de usar a propriedade length

let number = 325.45165415645
console.log(number.toFixed(2).replace('.',',')) //Diz quantas casas decimais o numero terá e substitui ponto por virgula

let text = 'Programar é muito legal !'
console.log(text.toLocaleUpperCase().toLocaleLowerCase()) //Colocar todas as letras em maiusculas ou minusculas
