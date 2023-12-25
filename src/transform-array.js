const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  const newArray = [];
  let discardNext = false;
  let errMes = "arr parameter must be an instance of the Array!"

  try {
    arr.forEach((item, index) => {
      if(item === "--discard-prev" && arr[index-2] === "--double-next"){
        arr[index] = 'drop'
        arr[index-2] = 'drop'
        return
      }
      if(item === "--discard-next" && arr[index+2] === "--double-prev"){
        arr[index] = 'drop'
        arr[index+1] = 'drop'
        arr[index+2] = 'drop'
        return
      }
      if (item === "--discard-prev") {
        if (arr[index - 1]) {
          arr[index - 1] = "drop";
        }
  
        return;
      }
      if (item === "--discard-next") {
        if (arr[index + 1]) {
          arr[index + 1] = "drop";
        }
  
        return;
      }
    });
    arr.forEach((item, index) => {
      // if (discardNext) {
      //   discardNext = false;
      //   return;
      // }
      if (item === "--double-next") {
        if (arr[index + 1] && arr[index + 1] !== "drop") {
          newArray.push(arr[index + 1]);
        }
  
        return;
      }
      if (item === "--double-prev") {
        if (arr[index - 1] && arr[index - 1] !== "drop") {
          newArray.push(arr[index - 1]);
        }
        return;
      }
      if (item === "--discard-prev") {
        // if (newArray.length > 0 && arr[index - 2] !== "--discard-next") {
        //   newArray.pop();
        // }
  
        return;
      }
      if(item === "drop"){
        return
      }
      if (item === "--discard-next") {
        // discardNext = true;
        return;
      }
      newArray.push(item);
    });
    return newArray;
  } catch (error) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
 
}

module.exports = {
  transform,
};
