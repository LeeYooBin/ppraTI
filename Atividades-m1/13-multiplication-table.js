const prompt = require("prompt-sync")();

for (let i = 1; i <= 5; i++) {
  const n = parseInt(prompt(`Digite o ${i}° número: `));

  for (let j = 1; j <= 10; j++) {
    console.log(`${n} x ${j} = ${n * j}`);
  }
}