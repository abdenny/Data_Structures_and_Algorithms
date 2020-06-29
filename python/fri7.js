// Challenge 1

// The Collatz Conjecture goes like this:

// Take any number n. If n is even, divide it by 2, if n is odd, multiply it by 3 and add 1. Repeat the process indefinitely, and you'll eventually reach 1.

// Given a num variable, can you print all the numbers in num's Collatz sequence until 1 is reached? Print the numbers space-separated (and each test case on its own line).

// Challenge 2

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

// Challenge 3

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// Challenge 1
function collatz(num) {
  console.log(num);
  while (num != 1) {
    if (num % 2 == 0) {
      //num = num / 2;
      num /= 2;
      console.log(num);
    } else {
      num = num * 3 + 1;
      console.log(num);
    }
  }
}
collatz(20);
collatz(40);
//Challenge 2
function largestPalendrome() {
  for (var i = 999; i > 899; i--) {
    for (var j = i; j > 899; j--) {
      let num = i * j;
      if (isPal(num)) {
        return num;
      }
    }
  }
}
console.log(largestPalendrome());
function isPal(num) {
  palStr = num.toString().split('');
  for (var i = 0; i < palStr.length / 2; i++) {
    if (palStr[i] != palStr[palStr.length - (1 + i)]) {
      return false;
    }
  }
  return true;
}
// 906609
//Challenge 3
function smallest() {
  var num = 2000;
  while (!isDivisible(num)) {
    num++;
  }
  console.log(num);
}
function isDivisible(num) {
  for (var i = 1; i < 21; i++) {
    if (num % i != 0) {
      return false;
    }
  }
  return true;
}
smallest();
// 232792560
