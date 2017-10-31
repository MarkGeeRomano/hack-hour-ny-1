/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

function bestProfit(stock_prices_yesterday) {

// stock_prices_yesterday array of indices are the time in mins past trade time which was 9:30am
// value are prices of apples at the moment
// $500 at 10:30am, so stock_prices_yesterday[60] = 500;

// edge case, return 0 if highest value to sell and lowest value to offers no profit

// edge case, return 0 if it's not an array or all values are negative

// define a profit var for the calculated values in the array of the stock prices

// loop through the array

// finding the highest value to sell and the lowest value to buy, define vars for both to store
    // compare lowest to the highest
    
// return the profit is the difference between both vars
// 


}

module.exports = bestProfit;
