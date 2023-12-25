const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let recursion = false
  const redNames = [];
  const transformObjToString = (name, count) => {
    return `${name}(${count})`;
  };
  names.forEach((name) => {
    const foundName = redNames.filter((redName) => name === redName.name);
    if (foundName.length > 0) {
      const obj = {
        name: name,
        count: foundName[foundName.length - 1].count + 1,
      };
      redNames.push(obj);
    } else {
      const obj = { name: name, count: 0 };
      redNames.push(obj);
    }
  });
  const returnedArray = redNames.map((item) => {
    if (item.count > 0) {
      return transformObjToString(item.name, item.count);
    } else {
      return item.name;
    }
  });
  returnedArray.forEach(itemOne => {
    if(returnedArray.filter(itemTwo => itemTwo === itemOne).length > 1) {
      recursion = true
    }
  })
  
  if(recursion){
    console.log('recursion');
   return renameFiles(returnedArray)
  } 
  
  return returnedArray;
}

module.exports = {
  renameFiles
};
