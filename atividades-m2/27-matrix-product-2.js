const prompt = require("prompt-sync")();
const { readMatrix, generateMatrix } = require("./utils/matrix");

// Ler uma matriz
const matrix = readMatrix(6, 6);

// Gerar matriz
// const matrix = generateMatrix(6, 6, 0, 9);

const value = parseInt(prompt("Digite um número inteiro: "));

const vector = matrix.flatMap(row => row.map(e => e * value));

console.table(matrix);
console.log(vector);