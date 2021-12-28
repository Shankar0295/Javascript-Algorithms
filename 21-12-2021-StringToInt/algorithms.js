// 21/12/2021
// 59.String and Number Conversions.You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.
console.log("59.String and Number Conversions.You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.")

const intToString = (value) => {
    return "" + value
}

const stringToInt = (value) => {
    return +value
}

intToString(4) // "4"
stringToInt("4") // 4
intToString(29348) // "29348"
