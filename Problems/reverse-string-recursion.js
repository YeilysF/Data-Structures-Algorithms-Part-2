//Implement a function that reverses a string using iteration...and then recursion!
console.log('-------------------------------------');
console.log("Approach 1: Recursive Solution");
console.log('-------------------------------------');
function reverseStringRecursive (str) {
  let final = "";
  if (str === "") {
    return "";
  } else {
    final = reverseStringRecursive(str.substr(1)) + str.charAt(0);
    /*
    reverseStringRecursive("astery") + "m"
    (reverseStringRecursive("stery") + "a") + "m"
    ((reverseStringRecursive("tery") + "s") + "a") + "m"
    (((reverseStringRecursive("ery") + "t") + "s") + "a") + "m"
    ((((reverseStringRecursive("ry") + "e") + "t") + "s") + "a") + "m"
    (((((reverseStringRecursive("y") + "r") + "e") + "t") + "s") + "a") + "m"
    ((((((reverseStringRecursive("") + "y") + "r") + "e") + "t") + "s") + "a") + "m"
    */
  }
  console.log(final);
  return final;
}
reverseStringRecursive('mastery')

console.log('\n-------------------------------------');
console.log("Approach 2: Iterative Solution");
console.log('-------------------------------------');
function reverseStringIterative(str) {
  if(str.length == 0){
    console.log("")
    return "";
  }
  const arr = [];
  let j = 0;
  
  for(let i = str.length - 1; i >= 0; i--){
    arr[j] = str[i];
    j++;
  }
  let final = arr.join('');
  console.log(final);
  return final;
}

reverseStringIterative('mastery');
//reverseStringIterative('');
//should return: 'yretsam'