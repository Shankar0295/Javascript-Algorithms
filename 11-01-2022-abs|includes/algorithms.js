// 11/01/2022
// 86. Find the absolute value of a number
console.log('86. Find the absolute value of a number')

const absolute = (num) => {
    return Math.abs(num)
}

absolute(-12.2360) // 12.236

// ends here

// 87. Find out if the last character of string is “n” and return true if it is “n”
console.log('87. Find out if the last character of string is “n” and return true if it is “n”')

const isLastCharacterN = (str) => {
    let result = str.charAt(str.length - 1)
    return result.includes('n') ? true : false
}

isLastCharacterN("Miden") // true

isLastCharacterN("tommy") // false