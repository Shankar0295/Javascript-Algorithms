// 27/11/2021
// 36. Write a function that takes a number and returns the perimeter of either a circle or a square. The input will be in the form (letter `l`, number `num`) where the letter will be either `"s"` for *square*, or `"c"` for *circle*, and the number will be the side of the square or the radius of the circle.
console.log('36. Write a function that takes a number and returns the perimeter of either a circle or a square. The input will be in the form (letter `l`, number `num`) where the letter will be either `"s"` for *square*, or `"c"` for *circle*, and the number will be the side of the square or the radius of the circle.')

// Perimeter of a square: 4 * side.
// Perimeter of a circle: 6.28 * radius.
const perimeter = (l, num) => {
    let square = "s"
    let circle = "c"
    let isTrue = (l === square && 4 * num) || (l === circle && 6.28 * num)
    return isTrue
}

perimeter("s", 7) // 28
perimeter("c", 4) // 25.12
perimeter("c", 9) // 56.52
// ends here

// 37.Create a function that takes the height and radius of a cone as arguments and returns the volume of the cone rounded to the nearest hundredth.
console.log('37.Create a function that takes the height and radius of a cone as arguments and returns the volume of the cone rounded to the nearest hundredth.')

const coneVolume = (h, r) => {
    // volume of cone formula = (1/3)*3.14*r*r*h
    const pi = 3.14159;
    let volume = (pi * r * r * h) / 3
    let result = Math.ceil(volume * 100) / 100
    return result
}

coneVolume(3, 2) // 12.57
coneVolume(15, 6) // 565.49
coneVolume(18, 0) // 0
// ends here