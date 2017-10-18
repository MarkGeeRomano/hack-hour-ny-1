/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  function pow(base, power) {
    // check if power is 0, than return 1
    if (power === 0) return 1;
    if (power === 1) return base;
    let result = 1;
    result = base * pow(base, power - 1);
    return result;
  }
}


module.exports = pow;
