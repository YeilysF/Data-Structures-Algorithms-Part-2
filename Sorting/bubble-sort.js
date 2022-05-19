//Bubble Sort Implementation
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log('Unsorted Array');
console.log(numbers);

//Bubble Sort
console.log('\n-------------------------------------');
console.log("Approach: Bubble Sort");
console.log('-------------------------------------');
function bubbleSort(array) { //O(n^2)
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j+1] < array[j]) {
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
  console.log(array);
  return array;
}
console.log('\nSorted Array');
bubbleSort(numbers);




