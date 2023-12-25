const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArray = [];
  const arrayWithoutFalse = arr.filter((item) => item > 0).sort((a,b) => a-b);
  let tick = 0;
  arr.forEach((item) => {
    if (item < 0) {
      newArray.push(item);
    } else {
      newArray.push(arrayWithoutFalse[tick]);
      tick++;
    }
  });
  return newArray;
}

module.exports = {
  sortByHeight,
};
