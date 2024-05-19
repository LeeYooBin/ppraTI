const { generateMatrix, printMatrix } = require("./utils/matrix");

const matrixA = generateMatrix(3, 5, 0, 9);
const matrixB = generateMatrix(3, 5, 0, 9);

const matrixP = matrixA.map((row, i) => 
  row.map((value, j) => value * matrixB[i][j])
);

console.log(`Matriz A\n${printMatrix(matrixA)}`);
console.log(`Matriz B\n${printMatrix(matrixB)}`);
console.log(`Matriz P\n${printMatrix(matrixP)}`);