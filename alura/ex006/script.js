var jogadores = [
  {
    nome: "Rafa",
    vitoria: 3,
    empates: 2,
    derrota: 1,
    pontos: 0
  },
  {
    nome: "Paulo",
    vitoria: 2,
    empates: 3,
    derrota: 1,
    pontos: 0
  }
]

console.log(jogadores)

function calculaPontos(jogador) {
  var pontos = 0
  for (i = 0; i < jogador.length; i++){
    pontos = (jogador[i].vitoria * 3) + jogador[i].empates
    jogador[i].pontos = pontos
    console.log(jogador[i].pontos)
  }
    console.log(jogadores)
}

calculaPontos(jogadores)
