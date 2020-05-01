var isPalindrome = function(x) {
  let str = x.toString()
  let str1 = str.split('').reverse().join('')
  console.log(str1)
  if(str === str1){
      return true
  }
  return false
};
let num = 123
console.log(typeof num.toString())
console.log(isPalindrome(121))