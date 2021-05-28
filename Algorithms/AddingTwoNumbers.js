const addTwoNumbers_1 = function(l1, l2) {
  let firstNum = parseInt(l1.reverse().join(''));
  let secondNum = parseInt(l2.reverse().join(''));
  return String(firstNum + secondNum).split('').map(el => parseInt(el)).reverse()
};


// console.log(addTwoNumbers_1(l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]))

const addTwoNumbers_2 = (l1, l2) => {
  let result = [];

  while (l1.length !== l2.length) {
    l1.length > l2.length? l2.push(0) : l1.push(0)
    
  }
  
  let carry = 0;

  for (let i = 0; i < l1.length; i++) {
    let localSum = l1[i] + l2[i] + carry;
    carry = localSum >= 10 ? 1 : 0
    result.push(localSum % 10)
  }
  if (carry > 0) result.push(1)
  return result
}

console.log(addTwoNumbers_2(l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]))
