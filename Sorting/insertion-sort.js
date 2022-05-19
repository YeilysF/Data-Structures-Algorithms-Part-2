//Insertion Sort
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log('Unsorted Array');
console.log(numbers);

console.log('\n-------------------------------------');
console.log("Approach: Insertion Sort");
console.log('-------------------------------------');

function insertionSort(array) {  //O(n^2)

  for (let i = 1; i < array.length; i++) {
    // save first element in the unsorted subarray
    let current = array[i];

    // The last element of our sorted subarray
    let j = i - 1;
    while ((j > -1) && (current < array[j])) { 
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  console.log(array);
  return array;
}

insertionSort(numbers);

/* Explanation

First iteration:
Sorted: 99
Unsorted: 44, 6, 2, 1, 5, 63, 87, 283, 4, 0

compare last item of the sorted array to the first item of the unsorted array
99 < 44, 99 is bigger so we move it one place to the right (array[j+1] = array[j])
j is decremented; j = -1, while loop stops as condition is no longer true and then;
44 is then place in the right spot (array[j + 1] = current) 

*/