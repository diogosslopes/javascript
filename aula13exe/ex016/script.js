function contar(){
    var inicio = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')
    var cont = i

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.lenght == 0){
        window.alert('Faltam dados !')
    }else{ 
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (i<f) {
            for(cont = i;cont<=f;cont = cont + p){
            res.innerHTML += (`${cont} \u{1F449}  `)
            }
        }else{
            for(cont = i;cont>=f;cont = cont - p){
            res.innerHTML += (`${cont} \u{1F449}  `)
            }
        }
        res.innerHTML += (` \u{1F3C1}  `)
    }
    
}