// Some languages have "if" statements that are closed by "fi" instead of curly brackets.
// Or they close a "case" with "esac", i.e. the same keyword backwards.
// For this problem we'll check that all words in a string are "closed".
// Write a function that takes a string and returns true if every word is
// closed by its backwards counterpart.
// Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true


/*
  1. Various ways to do this, will loop through string for this one
  2. Ignore ALL none letter characters (use RegExp?)
  3. Push each word into an array
  4. If the Array is not even return false
  5.
*/
function matchWord(str) {
  if (!str) return true;

  const wordList = str.match(/[a-z,A-Z]+/g);
  const opening = [];

  if (!(wordList.length % 2)) return false;

  for (let i = 1; i < wordList.length; i += 2) {
    
  }
  return true;
}

module.exports = matchWord;
