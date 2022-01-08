var cartas = [
    Bulbasauro = {
    nome: "Bulbasauro",
    imagem:"https://pbs.twimg.com/profile_images/1225497788491931648/B6k9ZlCp_400x400.jpg",
    atributos: { 
    ataque: 8,
    defesa: 9,
    magia: 6
    }},
    DarthVader = {
    nome: "Darth Vader",
    imagem:"https://sm.ign.com/ign_br/screenshot/default/darth-vader_5yvm.jpg",
    atributos: { 
    ataque: 9,
    defesa:7,
    magia: 7
    }},
    Shiryudedragão = {
    nome: "Shiryu de dragão",
    imagem:"https://static.wikia.nocookie.net/saintseya/images/9/9e/Shiryu_3_255.png/revision/latest?cb=20151229134313&path-prefix=pt",
    atributos: { 
    ataque: 10,
    defesa: 9,
    magia: 7
    }},
  ]
  var cartaMaquina = 0
  var cartaJogador = 0
  
  function sortearCarta(){
    var numerocartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numerocartaMaquina]
    
    var numerocartaJogador = parseInt(Math.random() * cartas.length)
    while (numerocartaJogador == numerocartaMaquina){
      numerocartaJogador = parseInt(Math.random() * cartas.length)
    }
    cartaJogador = cartas[numerocartaJogador]
    console.log(cartaJogador)
    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false
   
    exibirCartaJogador()
  }
  
  // function exibirOpcoes(){
  //   var opcoes = document.getElementById("opcoes")
  //   var opcoesTexto = ""
  //   for (var atributo in cartaJogador.atributos){
  //      opcoesTexto += "<input type ='radio' name='atributo' value='" + atributo +"'>"+ atributo
  //     //opcoesTexto += `<input type= "radio" name='${atributo}' value = '${atributo}'> ${atributo}`
        
  //   }
  //   opcoes.innerHTML = opcoesTexto
  // }
  
  function obtemAtributoSelecionado(){
    var radioAtributos = document.getElementsByName("atributo")
    for (i=0; i<radioAtributos.length; i++){
      if (radioAtributos[i].checked == true){
        return radioAtributos[i].value
      }
    }
  }
  
  function jogar(){
    var atributoSelecionado = obtemAtributoSelecionado()
    var elementoResultado = document.getElementById("resultado")
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]
    
    if( valorCartaJogador > valorCartaMaquina ){
      elementoResultado.innerHTML = "Parabéns, você venceu !"
    }else if(valorCartaJogador < valorCartaMaquina){
      elementoResultado.innerHTML = "Que pena, você perdeu !"
    }else{
      elementoResultado.innerHTML = "Empate !"
    }
    exibirCartaMaquina()
  }
  
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
  
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    var tagHTML = "<div id='opcoes' class='carta-status'>"
    
      var opcoesTexto = ""
    for (var atributo in cartaJogador.atributos){
       opcoesTexto += "<input type ='radio' name='atributo' value='" + atributo +"'>"+ atributo + "  " + cartaJogador.atributos[atributo] + "<br>"
      //opcoesTexto += `<input type= "radio" name='${atributo}' value = '${atributo}'> ${atributo}`
        
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
  
  }
  
  function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
  
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    var tagHTML = "<div id='opcoes' class='carta-status'>"
    
      var opcoesTexto = ""
    for (var atributo in cartaMaquina.atributos){
       opcoesTexto += "<input type ='radio' name='atributo' value='" + atributo +"'>"+ atributo + "  " + cartaMaquina.atributos[atributo] + "<br>"
      //opcoesTexto += `<input type= "radio" name='${atributo}' value = '${atributo}'> ${atributo}`
        
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
  
  }
  
  function adicionarCarta() {
      var novaCarta =  {
        nome: "",
        imagem:"",
        atributos: { 
        ataque: 0,
        defesa: 0,
        magia: 0
        }
    }
      var nomeNovaCarta = document.getElementById('nomeCarta').value
      var ataqueNovaCarta = document.getElementById('ataqueCarta').value
      var defesaNovaCarta = document.getElementById('defesaCarta').value
      var magiaNovaCarta = document.getElementById('magiaCarta').value
      var imagemNovaCarta = document.getElementById('imagemCarta').value
      novaCarta.nome = nomeNovaCarta
      novaCarta.imagem = imagemNovaCarta 
      novaCarta.atributos.ataque = ataqueNovaCarta
      novaCarta.atributos.defesa = defesaNovaCarta
      novaCarta.atributos.magia = magiaNovaCarta
      
      cartas.push(novaCarta)
      
      console.log(cartas)
  }
  
  
  
  
  
  
  
  
  