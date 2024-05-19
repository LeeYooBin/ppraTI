const { readMatrix, printMatrix } = require("./utils/matrix");

const findMaxAbsolute = (row) => {
  let max = Math.abs(row[0]);

  for (let i = 1; i < row.length; i++) {
    const absValue = Math.abs(row[i]);
    if (absValue > max) max = absValue;
  }

  return max;
};

const divideByMaxAbsolute = (row, maxAbsolute) => {
  return row.map((element) => (element / maxAbsolute).toFixed(1));
};

// Ler matriz
const matrix = readMatrix(12, 13);

// Gerar matriz
// const matrix = generateMatrix(12, 13, 0, 9);

const modifiedMatrix = matrix.map(row => [...row]);

for (let i = 0; i < matrix.length; i++) {
  const maxAbsolute = findMaxAbsolute(matrix[i]);
  modifiedMatrix[i] = divideByMaxAbsolute(modifiedMatrix[i], maxAbsolute);
}

console.log("Matriz original");
console.table(printMatrix(matrix));
console.log("\nMatriz modificada");
console.table(printMatrix(modifiedMatrix));
