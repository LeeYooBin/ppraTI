const { readMatrix, printMatrix, sumCol, sumRow, generateMatrix } = require("./utils/matrix");

const sumMainDiagonal = (matrix) => {
  let sum = 0, aux = 0;
  for (let row of matrix) {
    sum += row[aux];
    aux += 1;
  }
  return sum;
};

// Ler matriz
const matrix = readMatrix(5, 5);

// Gerar matriz
// const matrix = generateMatrix(5, 5, 0, 9);

console.log(printMatrix(matrix));
console.log(`
Soma da linha 4: ${sumRow(matrix, 3)}
Soma da coluna 2: ${sumCol(matrix, 1)}
Soma da diagonal principal: ${sumMainDiagonal(matrix)}
Soma de todos os elementos: ${matrix.reduce((sum, row) => sum + row.reduce((sumRow, value) => sumRow + value, 0), 0)}
`);