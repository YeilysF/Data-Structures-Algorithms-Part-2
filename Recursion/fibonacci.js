//Recursion
//1. Identify the base case (when to stop the recursive calls)
//2. Identify the recursive case (calling the function again and again)
//3. Two returns ( base case and recursive case)

//Example 2: Fibonacci
console.log('-------------------------------------');
console.log('Fibonacci');
console.log('-------------------------------------');

//Given a number N return the index value of the Fibonacci sequence, where the sequence is:
// 0,1,1,2,3,5,8,13,21,34,55,89,144,....
//the pattern of the sequence is that each value is the sum of the previous values, that means that for N = 5 -> 2 + 3

console.log("Approach 1: Recursive Solution"); //O(2^N)
function fibonacciRecursive(n) {
  if(n < 2){
    return n;
  } else {
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
  }
}
console.log(fibonacciRecursive(3));
console.log(fibonacciRecursive(8));
console.log(fibonacciRecursive(10));

console.log("Approach 2: Iterative Solution") //O(n)
function fibonacciIterative(n) {
  let arr = [0,1];

  for(let i = 2; i <= n; i++){
    arr.push(arr[i-1] + arr[i-2]);
  }
  
  return arr[n];
}
console.log(fibonacciIterative(3));
console.log(fibonacciIterative(8));
console.log(fibonacciIterative(10));
