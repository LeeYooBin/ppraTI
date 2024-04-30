const prompt = require("prompt-sync")();

const a = parseFloat(prompt("Valor de A: "));
const b = parseFloat(prompt("Valor de B: "));
const c = parseFloat(prompt("Valor de C: "));

if (a < b + c && b < a + c && c < a + b) {
  console.log(
    a === b && b === c ? "Triângulo equilátero." :
    a !== b && b !== c ? "Triângulo escaleno." :
    "Triângulo isósceles" 
  );
}
else console.log("Não é triângulo.");