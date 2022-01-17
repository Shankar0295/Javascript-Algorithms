// 18/01/2022
// 96. Create a function that will return an integer number corresponding to the amount of digits in the given integer `num`.
console.log('96. Create a function that will return an integer number corresponding to the amount of digits in the given integer `num`.')

const num_of_digits = (num) => {
  return num.toString().length
}

num_of_digits(1000) // 4

num_of_digits(12) // 2

num_of_digits(1305981031) // 10

num_of_digits(0) // 1