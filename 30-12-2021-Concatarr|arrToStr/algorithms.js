// 30/12/2021
// 72. Create a function to concatenate two integer arrays.
console.log('72. Create a function to concatenate two integer arrays.')

const concat = (arr1, arr2) => {
    return [...arr1, ...arr2]
}


concat([1, 3, 5], [2, 6, 8]) // [1, 3, 5, 2, 6, 8]

concat([7, 8], [10, 9, 1, 1, 2]) // [7, 8, 10, 9, 1, 1, 2]

concat([4, 5, 1], [3, 3, 3, 3, 3]) // [4, 5, 1, 3, 3, 3, 3, 3]

//ends here

// 73.Convert an Array to a String Create a function that takes an array of numbers or letters and returns a string.
console.log('73.Convert an Array to a String Create a function that takes an array of numbers or letters and returns a string.')

const arrayToString = (arr) => {
    let str = ''
    const result = arr.map((item) => {
        str += item
    })
    return str
}


arrayToString([1, 2, 3, 4, 5, 6]) // "123456"

arrayToString(["a", "b", "c", "d", "e", "f"]) // "abcdef"

arrayToString([1, 2, 3, "a", "s", "dAAAA"]) // "123asdAAAA"