const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let bigCount = 0;
  const array = n.toString().split("");
  array.forEach((item, index) => {
    const testingArray = new Array(...array);
    testingArray.splice(index, 1);
    const variableCount = testingArray.join('')
    if (Number(variableCount) > bigCount) {
      bigCount = Number(variableCount);
    }
  });
  return bigCount;
}

module.exports = {
  deleteDigit
};
