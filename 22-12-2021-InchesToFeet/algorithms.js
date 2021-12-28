// 60.Create a function that accepts a measurement value in inches and returns the equivalent of the measurement value in feet.
console.log("60.Create a function that accepts a measurement value in inches and returns the equivalent of the measurement value in feet.")

const inchesToFeet = (inches) => {
    return (inches > 12) ? inches / 12 : 0
}

inchesToFeet(324) // 27
inchesToFeet(12) // 1
inchesToFeet(36) // 3

//ends here