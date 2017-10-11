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
  const romano = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC'
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
  }

  // if 4 or 9, --> 4:IV or 9:IX
  // if 40 or 90 --> 40:XL or 90: XC
  // if 400 or 900 --> 400:CD or 900:CM

  // first check if n === any of the given numbers
  if (n in romano) return romano[n];
  // //
  // n = n.toString();
  // for (var i = 0; i < n.length; i++) {
  //   if (n[0] < 5) {}
  // }
}

module.exports = romanNumeral;
