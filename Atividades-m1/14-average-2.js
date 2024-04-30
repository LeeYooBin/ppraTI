const prompt = require("prompt-sync")();

let s = 0;
let c = 0;

while (true) {
  const n = parseFloat(prompt(`Digite a ${c + 1}° nota: `));

  if (n <= 0) {
    console.log(`Média final: ${(s / c).toFixed(1)}`);
    break;
  }

  c += 1;
  s += n;
}