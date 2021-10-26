function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var anodig = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (anodig.value.length <= 0 || anodig.value > ano || anodig.value <= 0){
        window.alert('Ano digitado inválido')
    }else{
        var fsex = document.getElementsByName('radsex') //[0] para masculino e [1] para feminino
        var idade = ano - Number(anodig.value)
        var gen = ''
        var img = document.createElement('img') //Cria a tag IMG
        img.setAttribute('id','foto')//Cria o atributo id com nome foto
    }
    if (fsex[0].checked){
        gen = 'Homem'
        if( idade <= 1){
            //bebe
            img.setAttribute('src','imagens/bebe-mas250.png')
        }else if (idade <= 13){
            //criança
            img.setAttribute('src','imagens/criança-mas250.png')
        }else if (idade < 40){
            //Jovem
            img.setAttribute('src','imagens/jovem-homem.png')
        }else if(idade < 65){
            //Adulto
            img.setAttribute('src','imagens/homem250.png')
        }else{
            //Idoso
            img.setAttribute('src','imagens/idoso250.png')
        }
        
    }else{
        gen = 'Mulher'
        if( idade <= 1){
            //bebe
            img.setAttribute('src','imagens/bebe-fem250.png')
        }else if (idade <= 13){
            //criança
            img.setAttribute('src','imagens/criança-fem250.png')
        }else if (idade < 40){
            //Jovem
            img.setAttribute('src','imagens/jovem-mulher.png')
        }else if(idade < 65){
            //Adulto
            img.setAttribute('src','imagens/mulher250.png')
        }else{
            //Idoso
            img.setAttribute('src','imagens/idosa250.png')
        }
    }
    res.style.textAlign = 'center' // Alinhamento com JS
    res.innerHTML = `Idade ${idade} e sexo ${gen}`
    res.appendChild(img)

}