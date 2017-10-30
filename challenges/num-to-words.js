//  CS-HackHours-numToWords

// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */


const EnglishNumeralMap = {
	"1000000000000000": "Quadrillion",
	"1000000000000": "Trillion",
	"1000000000": "Billion",
	"1000000": "Million",
	"1000": "Thousand",
	"100": "Hundred",
	"90": "Ninety",
	"80": "Eighty",
	"70": "Seventy",
	"60": "Sixty",
	"50": "Fifty",
	"40": "Forty",
	"30": "Thirty",
  "20":"Twenty",
  "19":"Nineteen",
  "18":"Eighteen",
  "17":"Seventeen",
  "16":"Sixteen",
  "15":"Fifteen",
  "14":"Fourteen",
  "13":"Thirteen",
  "12":"Twelve",
  "11":"Eleven",
  "10":"Ten",
  "9":"Nine",
  "8":"Eight",
  "7":"Seven",
  "6":"Six",
  "5":"Five",
  "4":"Four",
  "3":"Three",
  "2":"Two",
  "1":"One",
}

const EnglishNumeralZero = {
  "0":"Zero",
}

const EnglishNumeralDescendingKeyVal = [1000000000000000, 1000000000000, 1000000000, 1000000, 1000, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];


// console.log ("Object.keys(EnglishNumeralMap).length === " + Object.keys(EnglishNumeralMap).length);
// console.log ("EnglishNumeralDescendingKeyVal.length === " + EnglishNumeralDescendingKeyVal.length);


function englishNumeralSub100(num, iENKV = 0) {
  // console.log ("______________________________");
  // console.log ("IN EnglishNumeral iENKV === " + iENKV);
  numChars = Math.floor(num / EnglishNumeralDescendingKeyVal[iENKV]);
  // console.log ("IN EnglishNumeral numChars === " + numChars);
  num -= EnglishNumeralDescendingKeyVal[iENKV] * numChars;
  // console.log ("IN EnglishNumeral new num === " + num);
  if (num === 0) {
    return Array(numChars+1).join(EnglishNumeralMap[EnglishNumeralDescendingKeyVal[iENKV]]);
  } else {
    return Array(numChars+1).join(EnglishNumeralMap[EnglishNumeralDescendingKeyVal[iENKV++]]) + englishNumeralSub100(num, iENKV);
  }
}

function englishNumeral(num) {
  // return englishNumeralSub100(num);
  let strNumerals = '';
  if (Number.isSafeInteger(num)) {
    if (num === 0) {
      strNumerals = EnglishNumeralZero[0];
    }
    let subNumber;
    let iENKV = 0;
    while (num) {
      switch (true) {
        case (num >= 1000) :
          subNumber = Math.floor(num / EnglishNumeralDescendingKeyVal[iENKV]);
          if (subNumber) {
            strNumerals += englishNumeral(subNumber) + EnglishNumeralMap[EnglishNumeralDescendingKeyVal[iENKV]];
            num = num % EnglishNumeralDescendingKeyVal[iENKV];
          }
          iENKV++;
          break;
        case (num >= 100) :
          subNumber = Math.floor(num / EnglishNumeralDescendingKeyVal[iENKV]);
          if (subNumber) {
            strNumerals += englishNumeralSub100(subNumber) + EnglishNumeralMap[EnglishNumeralDescendingKeyVal[iENKV]];
            num = num % EnglishNumeralDescendingKeyVal[iENKV];
          }
          iENKV++;
          break;
        default :
          strNumerals += englishNumeralSub100(num);
          num = 0;
      }
    }
  }
  else {
    strNumerals = num + ' is NOT a safe integer.';
  }
  return strNumerals
}

let numToWords = englishNumeral;

let testNum;

// testNum = 0;
// console.log ("englishNumeral(testNum=" + testNum + ") === " + englishNumeral(testNum));
// testNum = 3;
// console.log ("englishNumeral(testNum=" + testNum + ") === " + englishNumeral(testNum));
// testNum = 4;
// console.log ("englishNumeral(testNum=" + testNum + ") === " + englishNumeral(testNum));
// testNum = 5;
// console.log ("englishNumeral(testNum=" + testNum + ") === " + englishNumeral(testNum));
// testNum = 6;
// console.log ("englishNumeral(testNum=" + testNum + ") === " + englishNumeral(testNum));
// testNum = 8;
// console.log ("englishNumeral(testNum=" + testNum + ") === " + englishNumeral(testNum));
// testNum = 9;
// console.log ("englishNumeral(testNum=" + testNum + ") === " + englishNumeral(testNum));
// testNum = 10;
// console.log ("englishNumeral(testNum=" + testNum + ") === " + englishNumeral(testNum));
// testNum = 11;
// console.log ("englishNumeral(testNum=" + testNum + ") === " + englishNumeral(testNum));
// testNum = 800;
// console.log ("englishNumeral(testNum=" + testNum + ") === " + englishNumeral(testNum));
// testNum = 900;
// console.log ("englishNumeral(testNum=" + testNum + ") === " + englishNumeral(testNum));
// testNum = 1000;
// console.log ("englishNumeral(testNum=" + testNum + ") === " + englishNumeral(testNum));
// testNum = 1100;
// console.log ("englishNumeral(testNum=" + testNum + ") === " + englishNumeral(testNum));

//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
testNum = Number.MAX_SAFE_INTEGER; // 9007199254740991
console.log ("englishNumeral(testNum=" + testNum + ") === " + englishNumeral(testNum));
testNum = Number.MAX_SAFE_INTEGER + 1; // 9007199254740991
console.log ("englishNumeral(testNum=" + testNum + ") === " + englishNumeral(testNum));
// testNum = 999888777666555392;
// console.log ("englishNumeral(testNum=" + testNum + ") === " + englishNumeral(testNum));
// testNum = 999888777666222080;
// console.log ("englishNumeral(testNum=" + testNum + ") === " + englishNumeral(testNum));


module.exports = numToWords;