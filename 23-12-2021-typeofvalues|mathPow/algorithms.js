//23/12/2021
// 62.Create a function that takes an array and returns the types of values (data types) in a new array.
console.log("62.Create a function that takes an array and returns the types of values (data types) in a new array.")

const arrayValuesTypes = (arr) => {
  const arrtype = arr.map((item) => {
    return typeof (item)
  })
  return arrtype
}


arrayValuesTypes([1, 2, "null", []])
// ["number", "number", "string", "object"]

arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
// ["string", "boolean", "boolean", "number", "number", "object", "object"]

arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
// ["number", "string", "string", "object", "object", "boolean", "number"]
//ends here


// 63. To the Power of _____ Create a function that takes a base number and an exponent number and returns the calculation.
console.log("63. To the Power of _____ Create a function that takes a base number and an exponent number and returns the calculation.")

const calculateExponent = (pow, exp) => {
  return Math.pow(pow, exp)
}

calculateExponent(5, 5) // 3125
calculateExponent(10, 10) // 10000000000
calculateExponent(3, 3) // 27