const prompt = require("prompt-sync")();

const generateMatrix = (rows, columns, min, max) => {
  const matrix = [];

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      row.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    matrix.push(row);
  }

  return matrix;
}

const readMatrix = (row, column) => {
  const matrix = [];

  for (let i = 0; i < row; i++) {
    const row = [];
    for (let j = 0; j < column; j++) {
      row.push(parseFloat(prompt(`Digite o elemento M[${i + 1}][${j + 1}]: `)));
    }
    matrix.push(row);
  }

  return matrix;
}

const printMatrix = (matrix) => {
  let result = "";
  for (let i = 0; i < matrix.length; i++) {
    result += matrix[i].join(" ");
    result += "\n";
  }

  return result;
}

const sumRow = (matrix, row) => {
  return matrix[row].reduce((sum, value) => sum += value, 0)
}

const sumCol = (matrix, col) => {
  return matrix.map(row => row[col]).reduce((sum, value) => sum += value, 0)
}

module.exports = {
  generateMatrix,
  readMatrix,
  printMatrix,
  sumRow,
  sumCol
}