const { generateMatrix, printMatrix } = require("./utils/matrix");

const sumAboveDiagonal = (matrix) => {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
};

const sumBelowDiagonal = (matrix) => {
  let sum = 0;
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
};

const matrix = generateMatrix(10, 10, 0, 9);

const aboveDiagonalSum = sumAboveDiagonal(matrix);
const belowDiagonalSum = sumBelowDiagonal(matrix);

console.log(printMatrix(matrix));
console.log(`Soma dos elementos acima da diagonal principal: ${aboveDiagonalSum}`);
console.log(`Soma dos elementos abaixo da diagonal principal: ${belowDiagonalSum}`);
