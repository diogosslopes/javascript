let controle = {
    receitas:[2041, 330],
    despesas:[150, 197, 89.9, 42.66, 200, 97, 3000]
}

function soma(r){
    let somaR = 0
    let somaD = 0
    for(i=0;i<controle.receitas.length;i++){
        somaR = somaR + r.receitas[i]
    }
    for(x=0;x<controle.despesas.length;x++){
        somaD = somaD + r.despesas[x]
    }
    console.log(`O total de receitas foi de ${somaR}`)
    console.log(`O total de despesas foi de ${somaD}`)
    
    if(somaD<somaR){
        console.log(`O saldo final foi positivo de ${somaR - somaD}`)
    }else{
        console.log(`O saldo final foi negativo de ${somaR - somaD}`)
    }
}

soma(controle)


/*for(i=0;i<controle.receitas.length;i++){
    soma = soma + controle.receitas[i]
}

console.log(controle.receitas)
console.log(soma)*/
