const prompt = require("prompt-sync")();

const arrayA = [];

for (let i = 0; i < 100; i++) {
  arrayA.push(parseInt(prompt(`Digite o ${i + 1}° número inteiro: `)));
}

const arrayB = arrayA.filter(e => e > 0);

console.log("Vetor A:", arrayA);
console.log("Vetor B:", arrayB);
