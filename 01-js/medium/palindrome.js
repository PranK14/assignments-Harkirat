/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // const temp = str.replace(/[^\w\s]|_/g, '')
  // let charArr = temp.toLowerCase().split('')
  // let i = 0,
  //   j = charArr.length - 1
  // while (i < j) {
  //   if (charArr[i] === ' ') {
  //     i++
  //   }
  //   if (charArr[j] === ' ') {
  //     j--
  //   }
  //   if (charArr[i] != charArr[j]) {
  //     return false
  //   }
  //   i++
  //   j--
  // }
  // return true

  const rev = str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .reverse()
    .join('')
  return rev === str.replace(/[^\w]/g, '').toLowerCase()
}

module.exports = isPalindrome
