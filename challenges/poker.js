/*
 * Build a poker checking function that takes in two arrays of five elements,
 * where each array represents a player's hand and
 * each element represents a card from a standard deck of cards:
 * 52 cards, 2 - Ace, NO suits. (Jack = 11, Queen = 12, King = 13, Ace = 14)
 *
 * The function should return either "Player 1 wins",
 * "Player 2 wins", or "Draw" using the following ranking system:
 *
 * 4-of-a-kind > full house > straight > 3-of-a-kind > 2-pair > 1-pair > high card
 * Example: poker([3,5,5,5,2], [4,6,7,8,8]) -> "Player 1 wins"
 *
 * If two players have the same rank, then player with the highest card wins.
 * Example: [4, 4, 4, 2, 14] beats [8, 8, 8, 4, 5] because the first hand has the highest card.
 *
 * Clearly real-world poker has more complex rules for tied ranks, but we want you
 * to focus on overall architecture rather than edge cases. Have fun!
 * 
 * BONUS: Account for suits and add in Flush & Straight Flush/Royal Flush.
 * BONUS2: Create a deck of cards function that generates two random hands for you.
 */

const howMany = hand => {
  const count = {};
  hand.forEach(element => {
    if (!count.hasOwnProperty(element)) count[element] = 1;
    else count[element] += 1;
  });
  return count;
};

const isFourOfAKind = count => Object.values(count).includes(4);

const isFullHouse = count =>
  Object.values(count).includes(3) && Object.values(count).includes(2);

const isStraight = hand => {
  for (let i = 0; i < hand.length; i += 1) {
    if (hand[i + 1] !== hand[i] + 1) return false;
  }
  return true;
};

const isThreeOfAKind = count =>
  Object.values(count).includes(3) && !Object.values(count).includes(2);

const isTwoPair = count => {
  const values = Object.values(count);
  const firstMatch = values.indexOf(2);
  return firstMatch !== -1 && values.indexOf(2, firstMatch + 1) !== -1;
};

const isOnePair = count => {
  const values = Object.values(count);
  const firstMatch = values.indexOf(2);
  return firstMatch !== -1 && values.indexOf(2, firstMatch + 1) === -1;
};

// const highest = (hand1, count1, hand2, count2) => {
//   console.log('uh-oh');
//   const winning = -1;
  
  
  // const 
  
  
  
  // console.log(Math.max(...hand2));
  // const max1 = Math.max(...hand1);
  // const max2 = Math.max(...hand2);
  // if (max1 > max2) {
  //   if (count1[max1] === count2[max2]) {
  //     winning 1;
  //   }
  // } else if (max1 < max2) {
    
  // } else {
    
  // }

  // const most1 = Math.max(...Object.values(count1));
  // const most2 = Math.max(...Object.values(count2));
  // console.log(most1, most2);

  // const entries1 = Object.entries(count1);
  // const entries2 = Object.entries(count2);

  // console.log(entries1[most1]);
  // Object.keys(count).forEach(elem => {});
// };

const findRank = (hand, count) => {
  if (isFourOfAKind(count)) return 6;
  if (isFullHouse(count)) return 5;
  if (isStraight(hand)) return 4;
  if (isThreeOfAKind(count)) return 3;
  if (isTwoPair(count)) return 2;
  if (isOnePair(count)) return 1;
  return 0;
};

const tieFour = (count1, count2) => {
  const oneKeys = Object.keys(count1);
  const twoKeys = Object.keys(count2);
  const fours = [];
  const ones = [];
  for (let i = 0; i < oneKeys.length; i += 1) {
    if (count1[oneKeys[i]] === 4) fours.push(oneKeys[i]);
    else if (count1[oneKeys[i]] === 1) ones.push(oneKeys[i]);
    if (count2[twoKeys[i]] === 4) fours.push(twoKeys[i]);
    else if (count2[twoKeys[i]] === 1) ones.push(twoKeys[i]);
  }
  if ()
  console.log(fours, ones);
}

function poker(hand1, hand2) {
  if (hand1.length !== 5 || hand2.length !== 5)
    throw new Error('Incorrect length of inputs');
  // check if inputted numbers are out of range

  const countHand1 = howMany(hand1);
  const countHand2 = howMany(hand2);

  const hand1Rank = findRank(hand1, countHand1);
  const hand2Rank = findRank(hand2, countHand2);
  if (hand1Rank === hand2Rank) {
    switch (hand1Rank) {
      case 6: 
        console.log('hey');
        tieFour(countHand1, countHand2);
      case 5:
        
      case 4:
        
      case 3:
        
      case 2:
        
      case 1:
        
      case 0:
      default: 
    }
    // highest(hand1, countHand1, hand2, countHand2);
  }
  return hand1Rank > hand2Rank ? 'Player1 Wins!' : 'Player2 Wins!';
}

poker([2, 6, 6, 6, 6], [11, 8, 8, 8, 8]);


module.exports = poker;
