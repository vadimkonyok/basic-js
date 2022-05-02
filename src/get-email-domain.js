const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const arr = email.split('').reverse();
 for (let i = 0; i < arr.length; i++) {
   if (arr[i] === '@') {
     return (arr.slice(0, i).reverse().join(''));
   }
 }
}

module.exports = {
  getEmailDomain
};
