/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    arr = array.sort(function(a,b){
        return b-a    });
    tot = 1;
    for(var i = 0; i < 3; i++){
        tot*=arr[i];
    }
    return tot;
}


module.exports = highestProduct;
