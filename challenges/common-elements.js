// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

  // var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  // var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  // var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
  // var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"


function commonElements(array1, array2, array3, array4){
  //RETURN AN ARRAY WITH ELEMENTS THAT ALL FOUR ARRAYS HAVE
  
  //create a cache = []
  let cache = {};
  array1.map((a) => cache[a] = a);
  let newArr = Object.values(cache);
  
  // console.log(newArr)
  
  let cacheLen = 0;
  let result = [];
  //iterate over cache if array2, 3, 4 doesn't have it, pop it

  // console.log(array2.indexOf(12))  
  //console.log(array3.indexOf(12))  
  //console.log(array4.indexOf(12))  
  //console.log(array2.indexOf(12))  
  
  while (cacheLen < newArr.length) {
    // console.log('index', cacheLen);
    // console.log('this is the element at hand ===>', newArr[cacheLen]);
    // console.log('this is the typeof element at hand ===>', typeof newArr[cacheLen]);
    // console.log(array2.indexOf(newArr[cacheLen]))  
    // console.log(array3.indexOf(newArr[cacheLen]))  
    // console.log(array4.indexOf(newArr[cacheLen]))  
    // console.log('________________________________________');
    
    if ((result.indexOf(newArr[cacheLen]) === -1) && (array2.indexOf(newArr[cacheLen]) > -1) && (array3.indexOf(newArr[cacheLen]) > -1) && (array4.indexOf(newArr[cacheLen]) > -1)) {

      result.push(newArr[cacheLen]);
      // console.log(newArr[cacheLen])
    }
    cacheLen++;
  }

  return result;
}

module.exports = commonElements;
