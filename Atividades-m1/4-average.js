const prompt = require("prompt-sync")();

const n1 = parseFloat(prompt("N1: "));
const n2 = parseFloat(prompt("N2: "));

console.log((n1 + n2) / 2 >= 6 ? "PARABÉNS! Você foi aprovado." : "Você foi REPROVADO! Estude mais.");