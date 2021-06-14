//Done

var queryString = function(s, n) {
  let allInString = true;

  for (let idx = 1; idx <= n; idx++) {
    if (s.search(decToBinary(idx)) === -1) {
      allInString = false;
      break;
    } 
  }

  return allInString
};



var decToBinary = (decInt) => {
  if (decInt === 0) return "0"

  let binDigits = Math.round(Math.log2(decInt))
  let binaryString = ""

  for (let idx = binDigits; idx >= 0; idx--) {
    let tempNum = Math.pow(2, idx);

    if (tempNum <= decInt) {
      binaryString += "1"
      decInt -= tempNum
    } else {
      if (idx !== binDigits) binaryString += "0"
    }
  }
  return binaryString

}


let s = "0110"
let n1 = 3
let n2 = 10

console.log(queryString(s, n1))
console.log(queryString(s, n2))







