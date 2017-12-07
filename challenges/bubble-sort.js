// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
	let newArray = [];
	let temp = array[0];
	for (let i = 0; i < array.length; i++) {
		array[i];
		for (let j = 0; j < array.length; j++) {
			if(array[j] > array[j+1] ){
			/*temp = array[j+1];
			newArray[j+1] = array[j];
			newArray[j] = temp;*/
			newArray =  array[j] 
			}else{
			 
			newArray[j] = array[j];
			}
			
		}
	}
	console.log(newArray)
	return newArray;
}

bubbleSort([1,2,3,4,5,6,7,8,9]);

bubbleSort([9,8,7,6,5,4,3,2,1]);

module.exports = bubbleSort;
