const { readMatrix, printMatrix } = require("./utils/matrix");

const calculateSecondaryDiagonalAverage = (matrix) => {
  const diagonalElements = [
    matrix[0][2],
    matrix[1][1],
    matrix[2][0]
  ];
  
  return diagonalElements.reduce((accumulator, value) => accumulator + value, 0) / diagonalElements.length;
};

const multiplyDiagonals = (matrix, average) => {
  for (let i = 0; i < 3; i++) {
    matrix[i][i] *= average.toFixed(1);
  }
};

// Ler matriz
const matrix = readMatrix(3, 3);

// Gerar matriz
// const matrix = generateMatrix(3, 3, 0, 9);

const secondaryDiagonalAverage = calculateSecondaryDiagonalAverage(matrix);

console.log("Matriz original");
console.log(printMatrix(matrix));
multiplyDiagonals(matrix, secondaryDiagonalAverage);
console.log("Nova matriz");
console.log(printMatrix(matrix));
