/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array, firstTime = 0) {
    if (Array.isArray(array) === false || array.length < 3) return 0;
    if (array.length === 3) return array.reduce((product, num) => product * num);
    if (firstTime === 0) array.sort((a, b) => a - b);

    if (array[0] < 0 && array[1] < 0 && array.length > 3) {
        if ((array[0] * array[1]) > (array[array.length - 1] * array[array.length - 2])) {
            let last = array.pop();
            array = array.slice(0, 2);
            array.push(last);
            return highestProduct(array, firstTime++);
        }
    }
    return highestProduct(array.slice(-3), firstTime++);
}

// function highestProduct(arr) {
//     if (arr.length < 3 || Array.isArray(arr) === false) return 0;
// }


// ✗ should return 0 if there are less than 3 elements in the array 3 ms
// ✔ should return highest product of three elements in the array 6 ms
// ✗ should return 0 if the input is not an array 0 ms
// ✗ should handle negative numbers 1 ms

// describe('Highest Product', function () {
//     it('should return 0 if there are less than 3 elements in the array', function () {
//         expect(highestProduct(null)).to.eql(0);
//         expect(highestProduct([])).to.eql(0);
//         expect(highestProduct([1])).to.eql(0);
//         expect(highestProduct([1, 2])).to.eql(0);
//     }, ['edge cases']);

console.log('arr = null' , highestProduct(null));
console.log('arr = []' , highestProduct([]));
console.log('arr = [1]' , highestProduct([1]));
console.log('arr = [1,2]' , highestProduct([1,2]));

//     it('should return 0 if the input is not an array', function () {
//         expect(highestProduct(null)).to.eql(0);
//         expect(highestProduct('string')).to.eql(0);
//         expect(highestProduct(127)).to.eql(0);
//     }, ['valid input']);

//     it('should return highest product of three elements in the array', function () {
//         expect(highestProduct([1, 2, 3])).to.eql(6);
//         expect(highestProduct([5, 11, 0])).to.eql(0);
//         expect(highestProduct([5, 6, 7, 0, 7, 8, 9])).to.eql(504);
//         expect(highestProduct([4, 5, 2, 5, 5])).to.eql(125);
//     }, ['arryas', 'recursion', 'iteration']);

//     it('should handle negative numbers', function () {
//         expect(highestProduct([-1, 2, 3])).to.eql(-6);
//         expect(highestProduct([-5, 11, -1, 1])).to.eql(55);
//         expect(highestProduct([-5, 11, -1, -10])).to.eql(550);
//         expect(highestProduct([-5, 0, -1, -10])).to.eql(0);
//         expect(highestProduct([-5, 0, 5, 10])).to.eql(0);
//     }, ['arryas', 'recursion', 'iteration', 'negatives']);












module.exports = highestProduct;