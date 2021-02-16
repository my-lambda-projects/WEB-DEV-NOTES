function insertionSort(list) {
	// for i from 1 to length(list) inclusive do:
	//   /* select value to be inserted */
	//   valueToInsert = list[i]
	//   holePosition = i
	//   /* locate hole position for the element to be inserted */
	//   while holePosition > 0 and list[holePosition-1] > valueToInsert do:
	//     list[holePosition] = list[holePosition-1]
	//     holePosition = holePosition -1
	//   end while
	//   /* insert the number at hole position */
	//   list[holePosition] = valueToInsert
	// end for
}

// All 3 implementations work the same, just a reworking of syntax

// Insertion sort keeps a sorted left region working from left to right examining 
// each item and comparing it to items on its left. It then inserts the item in 
// the correct oposition in the array.
function insertionSortV1(arr) {

	for (let i = 1; i < arr.length; i++) {
		let valueToInsert = arr[i];

		let j = i;
		while (j > 0 && arr[j - 1] > valueToInsert) {
			arr[j] = arr[j - 1];
			j--;
		}
		arr[j] = valueToInsert;
	}
	return arr;
}

function insertionSortV2(arr) {
	// the `i` loop will iterate through every element of the array
	// we begin at i = 1, because we can consider the first element of the array as a
	// trivially sorted region of only one element
	// insertion sort allows us to insert new elements anywhere within the sorted region
	for (let i = 1; i < arr.length; i++) {
		// grab the first element of the unsorted region
		let valueToInsert = arr[i];

		// the `j` loop will iterate left through the sorted region,
		// looking for a legal spot to insert valueToInsert
		let j = i - 1;
		// keep moving left while valueToInsert is less than the j-th element
		while (j >= 0 && valueToInsert < arr[j]) {
			arr[j + 1] = arr[j];
			// the line above will move the j-th element to the right,
			// leaving a gap to potentially insert valueToInsert
			// we have to remember to decrement in our while loop!
			j--;
		}
		// insert valueToInsert into that gap
		arr[j + 1] = valueToInsert;
	}
	return arr;
}

// This solution utilizes var in the inner for loop to be able to use the variable
// after the loop exits. I generally try to avoid var because of the complications
// it can present.
function insertionSortV3(arr) {
	// the `i` loop will iterate through every element of the array
	// we begin at i = 1, because we can consider the first element of the array as a
	// trivially sorted region of only one element
	// insertion sort allows us to insert new elements anywhere within the sorted region
	for (let i = 1; i < arr.length; i++) {
		// grab the first element of the unsorted region
		let valueToInsert = arr[i];

		// the `j` loop will iterate left through the sorted region,
		// looking for a legal spot to insert valueToInsert
		for (var j = i - 1; j >= 0 && valueToInsert < arr[j]; j--) {
			// keep moving left while valueToInsert is less than the j-th element

			arr[j + 1] = arr[j];
			// the line above will move the j-th element to the right,
			// leaving a gap to potentially insert valueToInsert
		}
		// insert valueToInsert into that gap
		arr[j + 1] = valueToInsert;
	}
	return arr;
}





