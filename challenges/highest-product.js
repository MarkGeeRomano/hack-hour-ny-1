/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (array.length < 3 || Array.isArray(array) === false) return 0;
    if (array.length === 3) return array.reduce((product, num) => product * num);
    array.sort((a, b) => a - b);

    if (array[0] < 0 && array[1] < 0 && array.length > 3) {
        if ((array[0] * array[1]) > (array[array.length - 1] * array[array.length - 2])) {
            let last = array.pop();
            array = array.slice(0, 2);
            array.push(last);
            return highestProduct(array);
        }
    }
    return highestProduct(array.slice(-3));
}

module.exports = highestProduct;