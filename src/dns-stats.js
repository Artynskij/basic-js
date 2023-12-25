const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const returnObj = new Object();
  const collection = [];
  const collectionStrings = [];
  domains.forEach((domain) => {
    const newColl = [];
    domain.split(".").forEach((item, index) => {
      newColl.push(`.${item}`);
    });
    collection.push(newColl.reverse());
    collectionStrings.push(newColl.join(""));
  });
  collection.forEach((itemOfCollection, indexCollection) => {
    for (let i = 1; i < itemOfCollection.length + 1; i++) {
      const newArr = itemOfCollection.slice(0, i);
      if (collectionStrings[indexCollection].includes(newArr.join(""))) {
        if (!returnObj[newArr.join("")]) {
          returnObj[newArr.join("")] = 1;
        } else {
          returnObj[newArr.join("")] += 1;
        }
      }
    }
  });
  return returnObj;
}

module.exports = {
  getDNSStats
};
