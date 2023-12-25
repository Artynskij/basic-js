const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor( b = 0) {
    this.maxCount = b;
  }
  calculateDepth(arr, count = 0) {
    if(count === 0 ){
      this.maxCount = 0
  }
    count++;
    
    arr.forEach((item) => {
      if (item.map) {
        this.calculateDepth(item, count);
      }
    });

    if (this.maxCount < count) {
      this.maxCount = count;
    }

    return this.maxCount;
  }
}

module.exports = {
  DepthCalculator,
};
