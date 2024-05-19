const prompt = require("prompt-sync")();

const array = [];

for (let i = 1; i <= 10; i++) {
  array.push(parseInt(prompt(`Digite o ${i}° número: `)));
}

array.forEach((num, index) => {
  if (num % 2 === 0) {
    console.log(`Número ${num} - Índex ${index}`)
  }
});