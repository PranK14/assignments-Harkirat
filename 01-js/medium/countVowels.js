/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let count = 0
  const charArr = str.split('')
  charArr.forEach((el) => {
    if (
      el === 'a' ||
      el === 'e' ||
      el === 'i' ||
      el === 'o' ||
      el === 'u' ||
      el === 'A' ||
      el === 'E' ||
      el === 'I' ||
      el === 'O' ||
      el === 'U'
    )
      count += 1
  })
  return count
}

module.exports = countVowels
