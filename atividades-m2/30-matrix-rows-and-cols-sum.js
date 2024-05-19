const { readMatrix, printMatrix, sumCol, sumRow } = require("./utils/matrix");

// Ler matriz
const matrix = readMatrix(5, 5);

// Gerar matriz
// const matrix = generateMatrix(5, 5, 0, 9);

console.log(printMatrix(matrix))
console.log("Vetor SL: ", matrix.map((_, index) => sumRow(matrix, index)));
console.log("Vetor SC: ", matrix.map((_, index) => sumCol(matrix, index)));
