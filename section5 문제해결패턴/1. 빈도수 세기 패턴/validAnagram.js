/* 

Frequency Counter - validAnagram
Given two strings, write a function to determine if the second string is an anagram of the first. 
An anagram is a word, phrase, or name formed by rearranging the letters of another, 
such as cinema, formed from iceman.

Examples:

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
Note: You may assume the string contains only lowercase alphabets.

Time Complexity - O(n)
*/

function validAnagram(originString, anagramString) {
  // add whatever parameters you deem necessary - good luck!
  if (originString.length !== anagramString.length) {
    return false;
  }

  let originFrequencyCounter = {};
  let anagramFrequencyCounter = {};

  for (let val of originString) {
    originFrequencyCounter[val] = (originFrequencyCounter[val] || 0) + 1;
  }
  for (let val of anagramString) {
    anagramFrequencyCounter[val] = (anagramFrequencyCounter[val] || 0) + 1;
  }

  for (let key in originFrequencyCounter) {
    if (!(key in anagramFrequencyCounter)) {
      return false;
    }
    if (originFrequencyCounter[key] !== anagramFrequencyCounter[key]) {
      return false;
    }
  }

  return true;
}
