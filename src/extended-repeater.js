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
function repeater(str, options) {
  const objDefault= {
    repeatTimes: 1, 
    separator: '+', 
    addition: '', 
    additionSeparator: '|',
    additionRepeatTimes: 1,
  }
  const resArr = [];
  for (let key in options) {
    objDefault[key] = options[key]
  }
  for (i = 1; i <= objDefault.additionRepeatTimes; i++) {
    resArr.push(`${objDefault.addition}`);
  }
  let resultStr = `${str}` + resArr.join(`${objDefault.additionSeparator}`);
  let result = resultStr;
  for (i = 1; i < objDefault.repeatTimes; i++) {
    
    result = result + objDefault.separator + resultStr;
  }
 
  return result;
 
}


module.exports = {
  repeater
};
