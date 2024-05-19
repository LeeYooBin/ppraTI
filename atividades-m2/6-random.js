const prompt = require("prompt-sync")();

const number = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
let attempts = 1;

let guess = parseInt(prompt("Digite um número entre 1 e 10: "));

while (guess !== number) {
  guess = parseInt(prompt("Resposta incorreta, tente novamente: "));
  attempts += 1;
}

console.log(`Você acertou o número sorteado na ${attempts}° tentativa.`);