const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const returnMatrix = [];
  let rowMatrix = []
  let count = 0;
  matrix.forEach((col, indexCol) => {
    col.forEach((row, indexRow) => {
      if (matrix[indexCol] && matrix[indexCol][indexRow + 1]) {
        count++;
      }
      if (matrix[indexCol] && matrix[indexCol][indexRow - 1]) {
        count++;
      }
      if (matrix[indexCol - 1] && matrix[indexCol - 1][indexRow - 1]) {
        count++;
      }
      if (matrix[indexCol - 1] && matrix[indexCol - 1][indexRow + 1]) {
        count++;
      }
      if (matrix[indexCol - 1] && matrix[indexCol - 1][indexRow]) {
        count++;
      }
      if (matrix[indexCol + 1] && matrix[indexCol + 1][indexRow + 1]) {
        count++;
      }
      if (matrix[indexCol + 1] && matrix[indexCol + 1][indexRow - 1]) {
        count++;
      }
      if (matrix[indexCol + 1] && matrix[indexCol + 1][indexRow]) {
        count++;
      }
      rowMatrix.push(count);
      count = 0;
    });
    returnMatrix.push(rowMatrix)
    rowMatrix = []
  });
  return returnMatrix
}

module.exports = {
  minesweeper,
};
