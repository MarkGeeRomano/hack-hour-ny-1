/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 *
 */

function romanNumeral(n) {
  let ones = {};
  let strNum = n.toString();
  let digArr = strNum.split('');

  //
  // if (n > 5000) {
  //   return undefined;
  // }

  while(digArr[0] === 0) {
    digArr[0].shift()
  }

  let remainder;
  let newNum = Number(digArr.join(''));
  let romNum = '';

  if (newNum >= 1000) {
    let wholeNum = Math.floor(newNum / 1000);
    remainder = newNum - (1000 * wholeNum);
    for (var i = 0; i < wholeNum; i++) {
      romNum += 'M';
    }
  }

  if (newNum >= 100 && < 1000) {
    let hunNum = Math.floor(newNum / 100);
    let hunRem = newNum - (100 * hunNum);
    let strHunDig = hunNum.toString();
    let hunDig = hunNum.split('');

    if (Number(hunDig[0]) < 3) {
      for (var h = 0; h < 3; h++) {
        romNum += 'C';
      }
    }

    if (Number(hunDig[0]) === 4)) {
      romNum += 'CD';
    }
    if (Number(hunDig[0]) === 5) {
      romNum += 'D'
    }
    if (Number(hunDig[0]) > 5 && Number(hunDig[0]) < 9) {
      romNum += 'D'
      for (var i = 0; i < Number(hunDig[0]) - 5; i++) {
        romNum += 'C';
      }
    }
    if (Number(hunDig[0]) === 9) {
      romNum += 'CM'
    }
  }

  if (newNum >= 10 && < 100) {
    let tenNum = Math.floor(newNum / 100);
    let tenRem = newNum - (100 * tenNum);
    let strHunDig = hunNum.toString();
    let tenDig = hunNum.split('');

    if (Number(tenDig[0]) < 3) {
      for (var h = 0; h < 3; h++) {
        romNum += 'X';
      }
    }

    if (Number(tenDig[0]) === 4)) {
      romNum += 'XL';
    }
    if (Number(tenDig[0]) === 5) {
      romNum += 'L'
    }
    if (Number(tenDig[0]) > 5 && Number(tenDig[0]) < 9) {
      romNum += 'L'
      for (var i = 0; i < Number(tenDig[0]) - 5; i++) {
        romNum += 'X';
      }
    }
    if (Number(tenDig[0]) === 9) {
      romNum += 'XC'
    }

  }

  if (newNum >= 10 && < 100) {
    let singNum = Math.floor(newNum / 100);
    let singRem = newNum - (100 * singNum);
    let strHunDig = hunNum.toString();
    let singDig = hunNum.split('');

    if (Number(singDig[0]) < 3) {
      for (var h = 0; h < 3; h++) {
        romNum += 'I';
      }
    }

    if (Number(singDig[0]) === 4)) {
      romNum += 'IV';
    }
    if (Number(singDig[0]) === 5) {
      romNum += 'V'
    }
    if (Number(singDig[0]) > 5 && Number(singDig[0]) < 9) {
      romNum += 'V'
      for (var i = 0; i < Number(singDig[0]) - 5; i++) {
        romNum += 'I';
      }
    }
    if (Number(singDig[0]) === 9) {
      romNum += 'IX';
    }

  }


}

module.exports = romanNumeral;
