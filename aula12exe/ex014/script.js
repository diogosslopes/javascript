var agora = new Date()
var hora = agora.getHours()


if (hora <12 ){
    var hr = document.getElementById('hora')
    hr.innerHTML = `Agora são ${hora} horas`
} else if (hora < 18){
    var hr = document.getElementById('hora')
    var bd = document.getElementById('body')
    var img = document.getElementById('img')
    hr.innerHTML = `Agora são ${hora} horas`
    bd.style.background = 'Blue'
    img.src = 'imagens/entardecer300px.jpg'
    
}else{
    var hr = document.getElementById('hora')
    var bd = document.getElementById('body')
    hr.innerHTML = `Agora são ${hora} horas`
    bd.style.background = 'Black'
    img.src = 'imagens/anoitecer300px.jpg'
}