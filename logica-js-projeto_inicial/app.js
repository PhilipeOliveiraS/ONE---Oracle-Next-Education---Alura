alert("Boas vindas ao nosso site!");
let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
alert("Erro! Preencha todos os campos");
let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);
nome = prompt("Favor informar seu nome");
idade = prompt("Favor informar sua idade");

if (idade >= 18){ 
  alert(`Ótimo, ${nome}! Você já pode tirar a habilitação!`);
} else {
  alert(`Que pena, ${nome}! Você ainda não tem idade para tirar a habilitação.`);
}