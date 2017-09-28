// Write a function that returns an array containing the numbers 1 to NUM.
// Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers
// Divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzbuzz(num, fizz = 3, buzz = 5) {
  // set up an accumulator to return at end of function
  const acc = [];
  // run a for loop from 1 up to and including num
  for (let i = 1; i <= num; i += 1) {
    // set up an empty string
    let str = '';
    // check if n is divisible by 3
    // set fizz if true
    if (i % fizz === 0) str += fizz;
    // check if n is divisible by 3
    // set fizz if true
    if (i % buzz === 0) str += buzz;
    // push whatever makes most sense from string or i
    acc.push(str || i);
  }
  return acc;
}

module.exports = fizzbuzz;

/*
*
* (Succcess condition)
* When input n, output collection of numbers from 1 to n where every
* number divisible by 3 is replaced with the word 'fizz', every number divisible
* by 5 is replaced with 'buzz' and every number divisible by both with 'fizzbuzz'.
*
* (Defining/Exploring)
* input: A number(n)
* output: can mean display/store/retrieve/return
* collection: group of things
* replaced: take on thing, remove it, put in another thing
*
* (Match actions to actionable keyphrases)
* => parameter in a function
* => return from an array
* => array
* => 
*/
