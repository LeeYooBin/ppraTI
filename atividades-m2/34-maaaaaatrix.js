const { readMatrix, printMatrix, generateMatrix } = require("./utils/matrix");

const multiplyRowsByDiagonal = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    const diagonalElement = matrix[i][i];
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] *= diagonalElement;
    }
  }
};

// Ler matriz
const matrix = readMatrix(50, 50);

// Gerar matriz
// const matrix = generateMatrix(50, 50, 0, 9);

console.log("Matriz original");
console.log(printMatrix(matrix));
multiplyRowsByDiagonal(matrix);
console.log("Nova matriz");
console.log(printMatrix(matrix));

