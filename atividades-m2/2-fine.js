const prompt = require("prompt-sync")();

const speed = parseFloat(prompt("Digite a velocidade do carro em km/h: "));

console.log(
  speed > 80 ? `Você está acima da velocidade permitida e será multado em R$ ${((speed - 80) * 5).toFixed(2)}.`
  : "Você está dentro do limite de velocidade permitido."
);