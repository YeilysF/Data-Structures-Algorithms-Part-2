//Alternative Sort
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log('Unsorted Array');
console.log(numbers);

console.log('\n-------------------------------------');
console.log("Approach: Alternative Sort");
console.log('-------------------------------------');
function Sort(array) {  //O(n^2)
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  console.log(array);
  return array;
}
console.log('\nSorted Array');
Sort(numbers);