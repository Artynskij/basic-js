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
function getEmailDomain( email ) {
  const emailArray = email.split('')
  let returned 
  emailArray.map((item, index) => {
    if(item === '@') {
      returned = emailArray.slice(index+1, emailArray.length)
    }
  })
  return returned.join('')
}

module.exports = {
  getEmailDomain
};
