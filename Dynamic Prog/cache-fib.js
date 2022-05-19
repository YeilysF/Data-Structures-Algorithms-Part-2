//Caching & Fibonacci

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
let calculations = 0;
function fibonacci(n) { //O(2^n)
  calculations++;
  if (n < 2) {
    return n
  }
  return fibonacci(n-1) + fibonacci(n-2);
}

let calculations2 = 0;
function fibonacciMaster() { //O(n)
  let cache = {};
  
  return function fib(n) {
    calculations2++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n-1) + fib(n-2);
        return cache[n];
      }
    }
  }
}

//Alternative Option without Recursion
let calculations3 = 0;
function fibonacciMaster2(n) {
  let answer = [0,1];
  for ( let i = 2; i <= n; i++) {
    calculations3++;
    answer.push(answer[i-2]+ answer[i-1]);
  }
  return answer.pop();
}


const fasterFib = fibonacciMaster();

let num = 30;
console.log('Slow', fibonacci(num))
console.log('there were ' + calculations + ' calculations for ' + num);
console.log('DP', fasterFib(num));
console.log('there were ' + calculations2 + ' calculations for ' + num);
console.log('DP2', fibonacciMaster2(num));
console.log('there were ' + calculations3 + ' calculations for ' + num);

