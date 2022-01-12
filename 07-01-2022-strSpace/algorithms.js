// 07/01/2022
// 83. Create a function that returns true if a string contains any spaces.
console.log('83. Create a function that returns true if a string contains any spaces.')

const hasSpaces = (str) => {
    return str.includes(" ")
}

hasSpaces("hello") // false

hasSpaces("hello, world") // true

hasSpaces(" ") // true

hasSpaces("") // false

hasSpaces(",./!@#") // false