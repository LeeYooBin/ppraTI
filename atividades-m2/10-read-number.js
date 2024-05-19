const prompt = require("prompt-sync")();

const nums = [];
let response;

do {
  const number = parseFloat(prompt("Digite um número: "));

  nums.push(number)

  response = prompt("Digite \"S\" caso queira parar de ler números: ");
}
while (response.toUpperCase() !== "S");

const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);
console.log(Math.min(...nums));
console.log(sum/nums.length);
console.log(nums.filter(num => num % 2 === 0).length);
