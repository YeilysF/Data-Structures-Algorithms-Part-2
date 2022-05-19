//Cache Basics
function addTo80(n) {
  console.log('long time')
  return n + 80;
}
console.log(1, addTo80(5));
console.log(2, addTo80(5));
console.log(3, addTo80(5));

console.log();

let cache = {};
function memoizeAddTo80(n) {
  if (n in cache) {
    console.log('short time');
    return cache[n];
  } else {
    console.log('long time');
    const answer = n + 80;
    cache[n] = answer;
    return answer;
  }
}

console.log(1, memoizeAddTo80(5));
console.log(2, memoizeAddTo80(5));
console.log(3, memoizeAddTo80(5));

console.log();

// let's make that better with no global scope. This is closure in javascript.
function memoize2AddTo80() { 
  let cache1 = {};
  
  return function(n) {
    if (n in cache1) {
      console.log('short time');
      return cache1[n];
    } else {
      console.log('long time');
      const answer = n + 80;
      cache1[n] = answer;
      return answer;
    }
  }
}

const memoized = memoize2AddTo80();
console.log(1, memoized(6))
console.log(2, memoized(6))
console.log(3, memoized(6))