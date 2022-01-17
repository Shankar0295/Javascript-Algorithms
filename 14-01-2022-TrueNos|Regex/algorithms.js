// 14/01/2022
// 92.Create a function which returns the number of true values.
console.log('92.Create a function which returns the number of true values.')

const countTrue = (arr) => {
  let count = 0;
  const result = arr.map((item) => {
    if (item === true) {
      count = count + 1
    }
  })
  return count
}

countTrue([true, false, true, true, false]) // 3

//ends here

// 93. create a function to test empty string and return true using regex
console.log('93. create a function to test empty string and return true using regex')

const test = (str) => {
  let REGEXP = /^$/;
  let result = REGEXP.test(str)
  return result
}

test("hello") // false
test("") // true