const { NotImplementedError } = require('../extensions/index.js');

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

  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }


  let discardNext = false;
  let lastDiscardIndex;
  const result = arr.reduce((acc, item, idx) => {
     if (item === '--double-next'){
       if(arr[idx + 1])
      {acc.push(arr[idx + 1]);
      discardNext = false;}
    }else if (item === '--double-prev'){
      if (acc.length && lastDiscardIndex !== idx - 2) 
      {acc.push(arr[idx - 1]);
      discardNext = false;}
    }else if (item === '--discard-next'){
      discardNext = true;
      lastDiscardIndex = idx;
    } else if (item === '--discard-prev'){
      if (lastDiscardIndex !== idx - 2)
      {discardNext = false;
      return acc.filter((_, index) => index !== acc.length - 1);}
    } else {
      if (discardNext) {
        discardNext = false;
      } else {
        acc.push(item);
      }
    }
    return acc;
  },[]);

  return result;
 
}

module.exports = {
  transform
};


[ 1, 2, 3, 1337, 1337, 4, 5 ]