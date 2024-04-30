const prompt = require("prompt-sync")();

let s = 0;
let w = 0;

while (true) {
  const num = parseFloat(prompt("Digite um número decimal: "));
  const weight = parseFloat(prompt("Digite o peso: "));

  if (num <= 0 || weight <= 0) {
    console.log(`Média final: ${(s / w).toFixed(1)}`);
    break;
  }

  s += (num * weight);
  w += weight;
}