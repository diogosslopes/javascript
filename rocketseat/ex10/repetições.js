//for

for (i=0; i<100; i++){
    if(i== 50){
        console.log('Diogo')
        continue       // pula a execução de momento do proximo bloco   e o break para a execução
    }
    console.log(i)
}

//for ... of

let name = 'Diogo'
let names = ['Diogo', 'Pâmela', 'Antônio']
let teste = []

for (char of name){ //Puxara um caractere de cada vez e mostrará na tela
    console.log(char)
    teste.push(char)
}
console.log(teste)

for(name of names){ //Puxara um item de cada vez e mostrara na tela
    console.log(name)
}