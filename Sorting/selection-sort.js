const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log('Unsorted Array');
console.log(numbers);

console.log('\n-------------------------------------');
console.log("Approach: Selection Sort");
console.log('-------------------------------------');
function selectionSort(array) { //O(n^2)

  for (let i = 0; i < array.length - 1; i++) {
    //set current index as the smallest
    let smallest = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[smallest] > array[j]) {
        //update index of the smallest number
        smallest = j;
      }
    }
    //swap and place smallest num in the beginning of the arr
    let temp = array[smallest];
    array[smallest] = array[i];
    array[i] = temp;
  }
  console.log(numbers);
  return array;
}

selectionSort(numbers);