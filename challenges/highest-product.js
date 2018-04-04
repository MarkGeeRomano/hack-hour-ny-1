/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (Array.isArray(array) === false || array.length < 3) return 0;
    if (array.length === 3) return array.reduce((product, num) => product * num);
    array.sort((a, b) => a - b);
    console.log(array);

    const end3Product = highestProduct(array.slice(-3));
    const front3ishProduct = (array[0] * array[1] * array[array.length - 1]);
    if (front3ishProduct > end3Product) {
        // let last = array.pop();
        // array = array.slice(0, 2);
        // array.push(last);
        // return highestProduct(array);
        return front3ishProduct;
    }

    return end3Product;
}

console.log('arr = [-1, 2, 3]        >> ', highestProduct([-1, 2, 3]), '    ---- should be -6');
console.log('arr = [-5, 11, -1, 1]   >> ', highestProduct([-5, 11, -1, 1]), ' ---- should be 55');
console.log('arr = [-5, 11, -1, -10] >> ', highestProduct([-5, 11, -1, -10]), '---- should be 550');
console.log('arr = [-5, 0, -1, -10]  >> ', highestProduct([-5, 0, -1, -10]), '  ---- should be 0');
console.log('arr = [-5, 0, 5, 10]    >> ', highestProduct([-5, 0, 5, 10]), '    ---- should be 0');

// function highestProduct(arr) {
//     if (Array.isArray(arr) === false || arr.length < 3) return 0;
//     if (array.length === 3) return array.reduce((product, num) => product * num);
// }

// describe('Highest Product', function () {
//     it('should return 0 if there are less than 3 elements in the array', function () {
//         expect(highestProduct(null)).to.eql(0);
//         expect(highestProduct([])).to.eql(0);
//         expect(highestProduct([1])).to.eql(0);
//         expect(highestProduct([1, 2])).to.eql(0);
//     }, ['edge cases']);

// console.log('arr = null' , highestProduct(null));
// console.log('arr = []' , highestProduct([]));
// console.log('arr = [1]' , highestProduct([1]));
// console.log('arr = [1,2]' , highestProduct([1,2]));

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