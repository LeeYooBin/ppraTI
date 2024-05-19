const prompt = require("prompt-sync")();

const firstTerm = parseInt(prompt("Digite o primeiro termo da PA: "));
const root = parseInt(prompt("Digite a raiz da PA: "));

const terms = []

for (let i = 0; i < 10; i++) {
  if (i === 0) terms.push(firstTerm);
  else terms.push(terms[i - 1] + root);
}

console.log(`
10 primeiros termos da PA: ${terms.join(", ")}.
Soma dos 10 primeiros termos: ${terms.reduce((accumulator, currentValue) => accumulator + currentValue, 0)}.
`);
