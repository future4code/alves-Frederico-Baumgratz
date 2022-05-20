/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de BlackJack!");

const card1 = comprarCarta();
const card2 = comprarCarta();
const card3 = comprarCarta();
const card4 = comprarCarta();

let userPoints = card1.valor + card2.valor;
let computerPoints = card3.valor + card4.valor;

if (confirm("Quer iniciar uma nova rodada?")) {
  console.log(
    "Usuário - cartas: ",
    card1.texto,
    card2.texto,
    `- pontuação ${userPoints}`
  );
  console.log(
    "Computador - cartas: ",
    card3.texto,
    card4.texto,
    `- pontuação ${computerPoints}`
  );
  if (userPoints > computerPoints) {
    console.log("Parabéns, você ganhou!");
  } else if (userPoints == computerPoints) {
    console.log("Empate!");
  } else {
    console.log("Que pena, você perdeu!");
  }
} else {
  console.log("\nO jogo acabou");
}
