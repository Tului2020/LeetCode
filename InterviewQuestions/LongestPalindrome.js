const isPalindrome = str => {
  let palindrome = true;

  for (let idx = 0; idx < str.length / 2; idx++) {
    if (str[idx] !== str[str.length - 1 - idx]) {
      palindrome = false;
      break;
    }
  }
  return palindrome
}

// this will only return odd length of palindromes
var longestPalindrome = function(s) {
  let palindromeCounts = s.split('').map(el => 1)

  for (let idx = 0; idx < s.length; idx++) {

    let startIdx = Math.max(-1, idx - 1);
    let endIdx = Math.min(s.length, idx + 1);

    while (startIdx !== idx && idx !== endIdx) {
      if (startIdx >= 0 && endIdx < s.length) {
        // console.log([startIdx, idx, endIdx])
        let substring = s.substring(startIdx, endIdx)
        if (isPalindrome(substring) && palindromeCounts[idx] < substring.length) palindromeCounts[idx] = substring.length

      } else {
        break
      }
      startIdx -= 1;
      endIdx += 1
    }
    // 
    
    
  }
 return palindromeCounts
};

// longestPalindrome("abaxabaxabb")


// longestPalindrome("abaxabaxabb")

console.log(longestPalindrome("abaxabaxabb"))
// console.log(longestPalindrome("abaxabaxabybaxabyb"))
// console.log([isPalindrome("bybaxabyb"),"bybaxabyb".length])