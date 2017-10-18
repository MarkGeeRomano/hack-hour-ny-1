/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let sorted = array.sort((a,b) => {
      return Math.abs(b) - Math.abs(a) 
    })
    
    for(let i = 0 ;i < sorted.length; i += 1) {
       return  sorted[0] * sorted[1] * sorted[2]
      }
    }


module.exports = highestProduct;
