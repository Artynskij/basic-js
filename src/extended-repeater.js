const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(
  str,
  {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  }
) {
  const returnedArray = [];
  for (let indexMain = 0; indexMain < repeatTimes; indexMain++) {
    const additionArray = [];
    for (
      let indexSeparator = 0;
      indexSeparator < additionRepeatTimes;
      indexSeparator++
    ) {
      additionArray.push(addition);
    }
    const validateAdditionArray = additionArray.map((item) => String(item));
    returnedArray.push(
      String(str) + validateAdditionArray.join(additionSeparator)
    );
  }

  return returnedArray.join(separator);
}

module.exports = {
  repeater
};
