// 17/01/2022
// 95. Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers.
console.log('95. Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers.')

const shiftToRight = (a, b) => {
    return Math.floor(a / (2 ** b))
}


shiftToRight(80, 3) // 10

shiftToRight(-24, 2) // -6

shiftToRight(-5, 1) // -3

shiftToRight(4666, 6) // 72

shiftToRight(3777, 6) // 59

shiftToRight(-512, 10) // -1