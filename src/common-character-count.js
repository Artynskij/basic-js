const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const stringOne = s1.split("");
  const stringTwo = s2.split("");
  let count = 0;
  stringOne.forEach((elemOne) => {
    for (let i = 0; i < stringTwo.length; i++) {
      const element = stringTwo[i];
      if (elemOne === element) {
        count += 1;
        stringTwo.splice(i, 1);
        return;
      }
    }
  });
  return count;
}

module.exports = {
  getCommonCharacterCount
};
