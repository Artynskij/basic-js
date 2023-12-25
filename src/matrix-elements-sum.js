const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let returnCount = 0;
  matrix.forEach((col, indexCol) => {
    col.forEach((row, indexRow) => {
      if(indexCol === 0) {
        returnCount = returnCount + row;
        return
      }
      if (matrix[indexCol - 1][indexRow] === 0) {
        return;
      }
      returnCount = returnCount + row;
    });
  });
  return returnCount
}

module.exports = {
  getMatrixElementsSum,
};
