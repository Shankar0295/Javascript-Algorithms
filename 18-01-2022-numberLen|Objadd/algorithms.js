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

//ends here

// 97. Given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— return an object with that name and value in it (as key-value pairs).
console.log('97. Given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— return an object with that name and value in it (as key-value pairs).')

const addName = (obj, str, num) => {
  return Object.assign(obj, { [str]: num })
}


addName({}, "Brutus", 300) // { Brutus: 300 }

addName({ piano: 500 }, "Brutus", 400) // { piano: 500, Brutus: 400 }

addName({ piano: 500, stereo: 300 }, "Caligula", 440) // { piano: 500, stereo: 300, Caligula: 440 }


