/*
Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/

function sameFrequency(number1, number2) {
  const str1 = number1.toString();
  const str2 = number2.toString();
  if (str1.length !== str2.length) return false;

  let frequencyCounter = {};
  for (let el of str1) {
    frequencyCounter[el] = (frequencyCounter[el] || 0) + 1;
  }

  for (let el of str2) {
    if (!frequencyCounter[el]) {
      return false;
    } else {
      frequencyCounter[el]--;
    }
  }

  return true;
}
