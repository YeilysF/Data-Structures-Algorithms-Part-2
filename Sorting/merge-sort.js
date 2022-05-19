//Merge Sort
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

console.log('Unsorted Array');
console.log(numbers);

console.log('\n-------------------------------------');
console.log("Approach: Merge Sort");
console.log('-------------------------------------');

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  const length = array.length;
  const middle = Math.floor(length / 2)
  const left = array.slice(0, middle) 
  const right = array.slice(middle)
   //console.log('left:', left);
   //console.log('right:', right);
  
  return merge( //merge left and right side once sorted
    mergeSort(left),  //sort left side [99,44,6,2,1] -> [99,44] & [6,2,1] -> ... (Recursion)
    mergeSort(right)  //sort right side [5, 63, 87, 283, 4, 0] -> [5,63,87] & [283,4,0] -> ...(Recursion)
  )
}

function merge(left, right){
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  //left and rigth array have at least one number/item
  while(left.length > leftIndex && right.length > rightIndex){
     if(left[leftIndex] < right[rightIndex]){
       result.push(left[leftIndex]);
       leftIndex++;
     } else{
       result.push(right[rightIndex]);
       rightIndex++
    }
  }  
  // console.log(left, right)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


const answer = mergeSort(numbers);
console.log(answer);