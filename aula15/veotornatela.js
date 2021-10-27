let num = [5,7,9,6,4]
num.push(3)
num.sort()
/*for(cont = 0; cont < num.length; cont++)
console.log(`A posição ${cont} tem o valor ${num[cont]}`)*/
//repetição de vetores
console.log(num[0])
for(cont in num){
    console.log(`A posição ${cont} tem o valor ${num[cont]}`) //mostrando o numero que cada posição contem

} 

for (cont in num){
    pos = num.indexOf(num[cont])
    console.log(`O numero ${num[cont]} está na posição ${pos}`) //mostrando a posição que o numero está de forma automatica
}
