// 13/01/2022
// 90.Convert  array of strings to array of Numbers
console.log('90.Convert  array of strings to array of Numbers')

const toArrayOfNum = (arr) => {
    return arr.map(item => parseInt(item))
}
toArrayOfNum(["1", "2", "3"]) // [ 1, 2, 3 ]
toArrayOfNum(["9.6", "6.2"]) // [ 9.6, 6.2 ]

// ends here

// 91.A taxi journey costs $3 for the first kilometer travelled. However, all kilometers travelled after that will cost $2 each. Create a function which returns the distance that the taxi must\'ve travelled, given the cost as a parameter.
console.log('91.A taxi journey costs $3 for the first kilometer travelled. However, all kilometers travelled after that will cost $2 each. Create a function which returns the distance that the taxi must\'ve travelled, given the cost as a parameter.')

const journeyDistance = (num) => {
    return num < 3 ? 0 : 1 + (num - 3) / 2
}

journeyDistance(3)  // 1

journeyDistance(9)  // 4

journeyDistance(12) // 5.5

journeyDistance(5) //2