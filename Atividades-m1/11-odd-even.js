const prompt = require("prompt-sync")();

while (true) {
  const num = parseInt(prompt("Digite um número inteiro: "));
  
  if (num <= 0) break;

  console.log(num % 2 === 0 ? "Par" : "Ímpar");
}