const prompt = require("prompt-sync")();

const voters = parseInt(prompt("Número de eleitores: "));
const whiteVotes = parseInt(prompt("Número de votos brancos: "));
const nullVotes = parseInt(prompt("Número de votos nulos: "));
const validVotes = parseInt(prompt("Número de votos válidos: "));

console.log(`${100 * whiteVotes / voters}%  de votos brancos.`);
console.log(`${100 * nullVotes / voters}%  de votos nulos.`);
console.log(`${100 * validVotes / voters}%  de votos válidos.`);