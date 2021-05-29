const lengthOfLongestSubstring = function(s) {
  let longestSubString = "";
  let longestCount = 0;

  s.split('').forEach(char => {
    let indexOfChar = longestSubString.indexOf(char)

    if (indexOfChar > -1) {
      if (longestCount < longestSubString.length) longestCount = longestSubString.length
      longestSubString = longestSubString.slice(indexOfChar + 1)
    }
    longestSubString += char

  })

  return longestCount < longestSubString.length ? longestSubString.length : longestCount

};

// console.log(lengthOfLongestSubstring('abcabcbb'))
// console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('cdd'));