// 27/12/2021
// 66.Front 3 - Slice Check Repeat Concatenate. Create a function that takes a string; we\'ll say that the front is the first three characters of the string. If the string length is less than three characters, the front is whatever is there. Return a new string, which is three copies of the front.
console.log('66.Front 3 - Slice Check Repeat Concatenate. Create a function that takes a string; we\'ll say that the front is the first three characters of the string. If the string length is less than three characters, the front is whatever is there. Return a new string, which is three copies of the front.')

const frontThree = (str) => {
    if (str.length > 3) {
        const front = str.slice(0, 3)
        return `${front}${front}${front}`
    } else {
        return str
    }

}

frontThree("Python") // "PytPytPyt"

frontThree("Cucumber") // "CucCucCuc"

frontThree("bioshock") // "biobiobio"

//ends here

// 67. On/Off SwitchesCreate a function that returns how many possible arrangements can come from a certain number of switches (on / off). In other words, for a given number of switches, how many different patterns of **on** and **off** can we have?
console.log('67. On/Off SwitchesCreate a function that returns how many possible arrangements can come from a certain number of switches (on / off). In other words, for a given number of switches, how many different patterns of **on** and **off** can we have?')
// 𝑝=2𝑛 (formula for permutation)
const posCom = (combination) => {
    return Math.pow(2, combination)

}

posCom(1) // 2

posCom(3) // 8

posCom(10) // 1024