const zigZagConverter = (inputString, numRows) => {
  if (numRows === 1) return inputString
  let returnArr = new Array(numRows).fill("");
  let direction = -1;
  let idxKeeper = 0;

  for (let idx = 0; idx < inputString.length; idx++) {
    if (idx % (numRows - 1) === 0) {
      direction *= -1
    }

    returnArr[idxKeeper] += inputString[idx]    
    idxKeeper += direction
  }
  
  return returnArr.join('')
}


// console.log(zigZagConverter("PAYPALISHIRING", 3) === "PAHNAPLSIIGYIR")
// console.log(zigZagConverter("PAYPALISHIRING", 4) === "PINALSIGYAHRPI")
// console.log(zigZagConverter("A", 1) === "A")

console.log(zigZagConverter("AB", 1))
