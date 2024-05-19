const prompt = require("prompt-sync")();

const array = [];

for (let i = 1; i <= 7; i++) {
  array.push(prompt(`Digite o ${i}° nome: `));
}

console.log(array.reverse());