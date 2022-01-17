// 04/01/2022
// 77. Create a function that inverts the `rgb` values of a given tuple.

console.log('77. Create a function that inverts the `rgb` values of a given tuple.')

const colorInvert = (arr) => {
    const result = arr.map(item => {
        return 255 - item
    })
    return result
}

colorInvert([255, 255, 255]) // [0, 0, 0]
// (255, 255, 255) is the color white.
// The opposite is (0, 0, 0), which is black.

colorInvert([0, 0, 0]) // [255, 255, 255]
colorInvert([165, 170, 221]) // [90, 85, 34]

//ends here

// 78. Write a function to check if an array contains a particular number.
console.log('78. Write a function to check if an array contains a particular number.')

const check = (arr, num) => {
    const result = arr.some((item) => {
        return item === num
    })
    return result
}

check([1, 2, 3, 4, 5], 3) // true

check([1, 1, 2, 1, 1], 3) // false

check([5, 5, 5, 6], 5) // true

check([], 5) // false