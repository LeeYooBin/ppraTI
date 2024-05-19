const prompt = require("prompt-sync")();

console.log(`
[1] - Popular
[2] - Luxo
`);
let option = parseInt(prompt("Selecione o tipo de carro que deseja alugar: "));

while (option > 2 || option < 1) {
  option = parseInt(prompt("Alternativa inválida, tente novamente: "));
}

const time = parseInt(prompt("Digite a quantidade de dias de aluguel: "));
const distance = parseInt(prompt("Digite a distância a ser percorrida em Km: "));

console.log(
  `Preço: R$${
    option === 1 ?
      distance > 100 ? (90 * time + distance * 0.1).toFixed(2) :
      (90 * time + distance * 0.2).toFixed(2)
    : distance > 200 ? (150 * time + distance * 0.25).toFixed(2) :
      (150 * time + distance * 0.3).toFixed(2)
  }`
);
