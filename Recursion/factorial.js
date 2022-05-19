//Recursion
//1. Identify the base case (when to stop the recursive calls)
//2. Identify the recursive case (calling the function again and again)
//3. Two returns ( base case and recursive case)

//Example 1: Factorial
console.log('-------------------------------------');
console.log('Factorial');
console.log('-------------------------------------');

//Write two functions that finds the factorial of any number. One should use recursive and the other a for or while loop
//Factorial Ex. 5! = 5 * 4 * 3 * 2 * 1
console.log("Approach 1: Recursive Solution");
function findFactorialRecursive(number) { //O(n)
  if (number === 2) {
    return 2;
  } else {
    number = number * findFactorialRecursive(number - 1);
    //console.log(number)
  }
  return number;
}
console.log(findFactorialRecursive(2));
console.log(findFactorialRecursive(3));
console.log(findFactorialRecursive(6));

console.log("Approach 2: Iterative Solution")
function findFactorialIterative(number) { //O(n)
  let result = number;

  while (number !== 2) {
    result *= (number - 1);
    number--;
    //console.log(result);
  }
  return result;
}
console.log(findFactorialIterative(2));
console.log(findFactorialIterative(3));
console.log(findFactorialIterative(6));

