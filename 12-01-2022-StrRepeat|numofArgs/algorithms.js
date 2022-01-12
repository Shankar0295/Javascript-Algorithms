// 12/01/2022
// 88. Repeat string for the given number of times
console.log('88. Repeat string for the given number of times')

const repeat = (str, num) => {
    return str.repeat(3)
}

repeat("Python", 3) // PythonPythonPython

//ends here

// 89. Return the number of arguments getting passed
console.log('89. Return the number of arguments getting passed')

const numArgs = (...names) => {
    return names.length
}

numArgs() // 0

numArgs("foo") // 1

numArgs("foo", "bar") // 2

numArgs(true, false) // 2

numArgs({}) // 1