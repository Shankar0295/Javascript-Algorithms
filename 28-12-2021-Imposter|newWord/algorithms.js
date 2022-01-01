//28/12/2021
// 68. Among Us Imposter Formula Create a function that calculates the chance of being an imposter. The formula for the chances of being an imposter is `100 × (i / p)` where `i` is the imposter count and `p` is the player count. Make sure to round the value to the nearest integer and return the value as a percentage.
console.log('68. Among Us Imposter Formula Create a function that calculates the chance of being an imposter. The formula for the chances of being an imposter is `100 × (i / p)` where `i` is the imposter count and `p` is the player count. Make sure to round the value to the nearest integer and return the value as a percentage.')

const imposterFormula = (i, p) => {
  return Math.round(100 * (i / p))
}


imposterFormula(1, 10) // "10%"

imposterFormula(2, 5) // "40%"

imposterFormula(1, 8) // "13%"

//ends here

// 69.Create a function that takes a word and returns the new word without including the first character.
console.log('69.Create a function that takes a word and returns the new word without including the first character.')

const newWord = (str) => {
  return str.slice(1)
}


newWord("apple") // "pple"

newWord("cherry") // "herry"

newWord("plum") // "lum"