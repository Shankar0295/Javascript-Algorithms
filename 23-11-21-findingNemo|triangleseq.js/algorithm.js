// 23/11/2021
// 29. You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find nemo]!". If you can't find Nemo, return "I can't find Nemo :(".'

console.log('29. You\'re given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find nemo]!". If you can\'t find Nemo, return "I can\'t find Nemo :(".')

const findNemo = (str) => {
    const index = str.split(" ").findIndex((item) => item.indexOf('Nemo') > -1)
    const result = (index > -1) ? `I found Nemo at ${index + 1}` : "I can't find Nemo :("
    return result
}
findNemo("I am finding Nemo !") // "I found Nemo at 4!"
findNemo("Nemo is me") // "I found Nemo at 1!"
findNemo("I Nemo am") // "I found Nemo at 2!"
findNemo("I am finding Fish !") // "I can't find Nemo :("

//ends here

// 23/11/2021
// 28.This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are:(1, 3, 6, 10, 15). This means that the first triangle has just one dot, the second one has three dots, the third one has 6 dots and so on. Write a function that returns the number of dots when given its corresponding triangle number of the sequence.
console.log('28.This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are:(1, 3, 6, 10, 15). This means that the first triangle has just one dot, the second one has three dots, the third one has 6 dots and so on. Write a function that returns the number of dots when given its corresponding triangle number of the sequence.')

const triangle = (num) => {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        count += i
    }
    return count
}
triangle(1) // 1
triangle(6) // 21
triangle(215) // 23220

//ends here