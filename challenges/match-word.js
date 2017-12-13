// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  // take string, lowercase it, pad it at the end (add a space)
  str = str.toLowerCase() + ' ';
  // instantiate a cache
  const cache = [];

  // declare word, revWord
  let word = '';
  let revWord;
  // start iterating
  for (var i = 0; i < str.length; i++) {
    //if str[i] is an alphanumerical, add to word
    if (str[i].match(/[a-z]/i)) word += str[i];
    // if it's not alphanumeric, word is substantial
    else if (word) {
      // reverse the word
      revWord = word.split('').reverse().join('');
      // check the revWord against the last value in cache
      // if matches ? pop : push
      if (revWord === cache[cache.length - 1]) cache.pop() ? cache.push(word);
      // reset word
      word = '';
    }
  }
  // return the length of the cache -- if anything's in there, it's unbalanced
  return !cache.length;
}

module.exports = matchWord;
