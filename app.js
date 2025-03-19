alert('Boas vindas ao jogo do número secreto');

let numeroSecreto = parseInt(Math.random() * 10 + 1);
let chute = prompt('Escolha um número entre 1 e 10');

// Converter o chute para número (prompt retorna string)
chute = parseInt(chute); 

if (chute === numeroSecreto) {
  alert('Isso aí! Você descobriu o número secreto (5)');
} else {
  alert('Você errou. Tente novamente!');
}