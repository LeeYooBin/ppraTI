const prompt = require("prompt-sync")();

const menu = () => {
  return `
1 - Soma dos elementos
2 - Produto dos elementos
3 - Média dos elementos
4 - Array ordenado em ordem crescente
5 - Mostrar vetor 
  `;
}

const sumElements = (array) => {
  return array.reduce((accumulator, value) => accumulator += value, 0);
}

const multiplyElements = (array) => {
  return array.reduce((accumulator, value) => accumulator *= value, 1);
}

const array = [];

for (let i = 0; i < 6; i++) {
  array.push(parseInt(prompt(`Digite o ${i + 1}° número inteiro do array: `)));
}

console.log(menu());
let option = parseInt(prompt("Selecione uma opção: "));

while (option < 1 || option > 5) {
  option = parseInt(prompt("Opção inválida! Por favor, tente novamente: "));
}

switch(option) {
  case 1:
    console.log(sumElements(array));
    break;
  case 2:
    console.log(multiplyElements(array));
    break;
  case 3:
    console.log((sumElements(array) / array.length).toFixed(1));
    break;
  case 4:
    console.log(array.sort((a, b) => a - b));
    break;
  case 5:
    console.log(array);
    break;
  default:
    console.log("Opção inválida!");
    break;
}