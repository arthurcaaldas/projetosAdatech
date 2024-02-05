/* Crie um jogo de adivinhação em que o programa gera um número aleatório entre 
1 e 100 e o jogador tenta adivinhar o número. O jogo deve dar dicas ao jogador, 
informando se o número é maior ou menor do que a tentativa atual. O jogador 
deve continuar a adivinhar até acertar o número. No final, deverá informar a 
quantidade de tentativas. */

const numeroSorteado = Math.floor(Math.random() * 100 + 1);
let numeroEscolhido = parseInt(prompt("Digite um número"));
let chute = 0;

while (numeroEscolhido !== numeroSorteado) {
  switch (true) {
    case numeroEscolhido < numeroSorteado:
    console.log("Número abaixo");
    break;
    
    case numeroEscolhido > numeroSorteado:
    console.log("Número acima");
    break;
    
    default:
    console.log("Opção inválida");
  }
  
  numeroEscolhido = parseInt(prompt("Tente novamente. Digite outro número: "));
  chute++;
}

console.log(`Parabéns! Você acertou em ${chute + 1} tentativas.`);