/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base,power){
    if(power === 2) return base * base;
    else if(power === 1) return base;
    else if(power === 0) return 1;
    else return base * pow(base, power - 1);
  }
  
  function pow(base,power){
    if(power === 0) return 1;
    let answer = base;
    for(let i = power; i > 1; i--){
      answer *= base;
    }
    return answer;
  }

module.exports = pow;
