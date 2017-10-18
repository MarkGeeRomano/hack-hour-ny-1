/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    // if (array[0] < 0 && array[1] < 0) {
    //     if (Math.abs(array[0] + array [1]) > (array[array.length - 1] + array[array.length - 2])) {
    //     }
    // }

    if (array.length === 3) return array.reduce((product, num) => product * num);

    array.sort((a, b) => a - b);
    return highestProduct(array.slice(-3));
}

module.exports = highestProduct;