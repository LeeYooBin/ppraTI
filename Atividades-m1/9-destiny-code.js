const prompt = require("prompt-sync")();

const code = parseInt(prompt("Digite o código: "));

console.log(
  code === 1 ? "Sul" :
  code === 2 ? "Norte" :
  code === 3 ? "Leste" :
  code === 4 ? "Oeste" :
  [7, 8, 9].includes(code) ? "Sudeste" :
  code >= 10 && code <= 20 ? "Centro-Oeste" :
  [5, 6].includes(code) || (code >= 25 && code <= 50) ? "Nordeste":
  "Produto importado"
);