//22/12/2021
// 60.Create a function that accepts a measurement value in inches and returns the equivalent of the measurement value in feet.
console.log("60.Create a function that accepts a measurement value in inches and returns the equivalent of the measurement value in feet.")

const inchesToFeet = (inches) => {
    return (inches > 12) ? inches / 12 : 0
}

inchesToFeet(324) // 27
inchesToFeet(12) // 1
inchesToFeet(36) // 3

//ends here

console.log('61. I\'d like to calculate how long on average I\'ve lived in a single house. Given a person\'s `age` and the number of times they\'ve **moved house** as `moves`, return the average number of years that they\'ve spent living in the same house.')

const yearsInOneHouse = (age, moves) => {
    return age / (moves + 1)
}



yearsInOneHouse(30, 1) // 15

yearsInOneHouse(15, 2) // 5

yearsInOneHouse(80, 0) // 80