// 06/01/2022
// 81. Create a function that takes a string and changes the word amazing to not amazing. Return the string without any change if the word edabit is part of the string.
console.log('81. Create a function that takes a string and changes the word amazing to not amazing. Return the string without any change if the word edabit is part of the string.')

const amazingEdabit = (str) => {
    if (str.includes("edabit")) {
        return str
    } else {
        let result = str.substr(0, str.length - 8)
        return `${result}${`not amazing.`}`
    }
}

amazingEdabit("edabit is amazing.") // "edabit is amazing."

amazingEdabit("Mubashir is amazing.") // "Mubashir is not amazing."

//ends here

// 82. A typical car can hold four passengers and one driver, allowing five people to travel around. Given n number of people, return how many cars are needed to seat everyone comfortably.
console.log('82. A typical car can hold four passengers and one driver, allowing five people to travel around. Given n number of people, return how many cars are needed to seat everyone comfortably.')

const carsNeeded = (n) => {
    return Math.ceil(n / 5)
}

carsNeeded(5) // 1

carsNeeded(11) // 3

carsNeeded(0) // 0