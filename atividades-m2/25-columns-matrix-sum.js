const { readMatrix, generateMatrix } = require("./utils/matrix");

// Lê elemento por elemento da matriz de uma matriz 15 x 20
const matrix = readMatrix(15, 20);

// Gera uma matriz 15 x 20 com números de 0 a 9
// const matrix = generateMatrix(15, 20, 0, 9);

const columnsSums = Array(matrix[0].length).fill(0);

matrix.forEach(row => {
  row.forEach((value, columnIndex) => {
    columnsSums[columnIndex] += value;
  });
});

console.table(matrix);
columnsSums.forEach((columnSum, index) => console.log(`Soma da ${index + 1}° coluna: ${columnSum}`));