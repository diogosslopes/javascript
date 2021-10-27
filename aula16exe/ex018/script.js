var num = document.getElementById('txtnum')
var list = document.getElementById('res')
var vet = []



function add(){
    if(num.value.length == 0 || num.value < 1 || num.value > 100){
        window.alert('Digite um numero entre 1 e 100')
    }else{
        
        
        var n = Number(num.value)
        var item = document.createElement('Option')
        vet.push(n)
        item.text = (`Numero ${n} adicionado`) 
        list.appendChild(item)
        vet.sort()
        
        
    }

}

var result = document.getElementById('result')

function fim(){
    var soma = 0    
    for(cont=0;cont<vet.length;cont++){
        soma = soma + vet[cont]

    }

    var cont = vet.length
    result.innerHTML = (`Foram adicionados ${vet.length} a lista<br>`)
    result.innerHTML += (`O menor numero adicionado foi o ${vet[0]}<br>`)
    result.innerHTML += (`O maior numero adicionado foi o ${vet[cont - 1]}<br>`)
    result.innerHTML += (`A soma dos numeros da lista é ${soma}<br>`)
    result.innerHTML += (`A média dos numeros da lista é  ${soma/vet.length}<br>`)


}