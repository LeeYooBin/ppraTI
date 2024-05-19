const prompt = require("prompt-sync")();

const a = parseFloat(prompt("Digite o tamanho do primeiro segmento de reta: "));
const b = parseFloat(prompt("Digite o tamanho do segundo segmento de reta: "));
const c = parseFloat(prompt("Digite o tamanho do terceiro segmento de reta: "));

console.log(
  a < b + c && b < a + c && c < a + b ? "É possível formar um triângulo com esses segmentos de reta."
  : "Não é possível formar um triângulo com esses segmentos de reta."
);
