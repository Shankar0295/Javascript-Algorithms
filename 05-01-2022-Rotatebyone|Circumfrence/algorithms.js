// 05/01/2022
// 79. Given the radius of a circle and the area of a square, return `true` if the circumference of the circle is greater than the square\'s perimeter and `false` if the square\'s perimeter is greater than the circumference of the circle.
console.log('79. Given the radius of a circle and the area of a square, return `true` if the circumference of the circle is greater than the square\'s perimeter and `false` if the square\'s perimeter is greater than the circumference of the circle.')

const circle_or_square = (n1, n2) => {
    let perimeter = Math.sqrt(n2)
    let circumfrence = 2 * (3.14) * n1
    let squarePerimeter = 4 * perimeter
    return (circumfrence > squarePerimeter) ? true : false
}
circle_or_square(16, 625) // True

circle_or_square(5, 100) // False

circle_or_square(8, 144) // True
//ends here

// 80. Given an array, rotate the values clockwise by one (the last value is sent to the first position).
console.log('80. Given an array, rotate the values clockwise by one (the last value is sent to the first position).')

const rotateByOne = (arr) => {
    arr.unshift(arr.pop())
    return arr
}


rotateByOne([1, 2, 3, 4, 5]) // [5, 1, 2, 3, 4]

rotateByOne([6, 5, 8, 9, 7]) // [7, 6, 5, 8, 9]

rotateByOne([20, 15, 26, 8, 4]) // [4, 20, 15, 26, 8]