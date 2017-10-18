/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let sorted = array.sort((a,b) => {
      return Math.abs(b) - Math.abs(a) 
    })
    
    for(let i = 0 ;i < sorted.length; i += 1) {
       return  Math.abs(sorted[0]) * Math.abs(sorted[1]) * Math.abs(sorted[2])
      }
    }


module.exports = highestProduct;
