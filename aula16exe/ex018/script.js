var num = document.getElementById('txtnum')
var list = document.getElementById('res')
var vet = []



function add(){
    if(num.value.length == 0 || num.value < 1 || num.value > 100){
        window.alert('Digite um numero entre 1 e 100')
    }else if(vet.indexOf(Number(num.value)) != -1){
        window.alert('Numero já existente')                      
    }else{
        var item = document.createElement('Option')
        vet.push(Number(num.value))
        vet.sort()
        item.text = (`Numero ${num.value} adicionado`) 
        list.appendChild(item)
        result.innerHTML = ''
        
    }
    num.value = ''
    num.focus()

}

var result = document.getElementById('result')

function fim(){
    if(vet.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }else{
        var soma = 0
        var maior = vet[0]
        var menor = vet[0]    
            for(cont=0;cont<vet.length;cont++){
                soma = soma + vet[cont]
                if(vet[cont] > maior)
                    maior = vet[cont]
                if(vet[cont < menor])
                    menor = vet[cont]
                }
        var cont = vet.length
        result.innerHTML += (`Foram adicionados ${vet.length} a lista<br>`)
        result.innerHTML += (`O menor numero adicionado foi o ${menor}<br>`)
        result.innerHTML += (`O maior numero adicionado foi o ${maior}<br>`)
        result.innerHTML += (`A soma dos numeros da lista é ${soma}<br>`)
        result.innerHTML += (`A média dos numeros da lista é  ${soma/vet.length}<br>`)

    }


}