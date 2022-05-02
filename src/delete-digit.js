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
  const numberString = String(n);
  let max = 0;
  for (let i = 0; i < numberString.length; i++) {
    const item = i ? numberString.substring(0, i) + numberString.substring(i + 1, numberString.length) : numberString.substring(1, numberString.length);
    const itemNumber = Number(item);
    if (max < itemNumber) {
      max = itemNumber;
    }
    
  }
  return max;
}

module.exports = {
  deleteDigit
};
