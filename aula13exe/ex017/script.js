function gerar(){
    var txtnum = document.getElementById('txtnum')
    var res = document.getElementById('res')

    if(txtnum.value.length == 0){
        window.alert('Digite pelo menos um numero')
    }else{
        res.innerHTML = ''
        var num = Number(txtnum.value)
        for(cont = 1;cont <=10; cont++){
            var item = document.createElement('option')
            item.text = `${num} x ${cont} = ${num * cont}`
            item.value = `res${cont}`
            res.appendChild(item)
        }
    }
}