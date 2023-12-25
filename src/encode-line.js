const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const newStr = [];
  let localCount = 1;
  str.split("").forEach((item, index) => {
    if (str[index] === str[index + 1]) {
      localCount += 1;
    } else {
      if (localCount > 1) {
        newStr.push(`${localCount}${item}`);
        localCount = 1;
      } else {
        newStr.push(item);
      }
    }
  });
  return newStr.join('')
}

module.exports = {
  encodeLine
};
