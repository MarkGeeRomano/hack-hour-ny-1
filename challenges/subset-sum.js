/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
//create accumulator variable
let accumulator=0;

//create an empty array	
let newArray=[];

//loop throuhg the array
for (var i = 0; i < array.length; i++) {
	

	for (var j = i; j < array.length; j++) {
		array[j]
	
		//add each element to the accumator
		accumulator+=array[j];
		//add each element to the newArray
		newArray[j]=array[j];
		//check if the accumulator is equal to the target
		if( accumulator==target ){
			//if  true than  return the newArray.
			return newArray;
		}else if(  accumulator > target)
		{
		//else if the accumulator is greater than the target
		//set the 	accumulator to zero and empty out the newArray
		accumulator=0;
		newArray=[];

		}
	}
}
return false;
}
console.log( subsetSum([3, 7, 4, 2], 5) ); // - > true, 3 + 2 = 5

module.exports = subsetSum;
