const prompt = require("prompt-sync")();

const distance = parseFloat(prompt("Digite a distância que deseja percorrer em km: "));

console.log(
  `Preço da passagem: R$${
    distance > 200 ? (distance * 0.45).toFixed(2)
    : (distance * 0.5).toFixed(2)
  }`
);