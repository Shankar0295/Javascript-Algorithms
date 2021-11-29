// 24/11/2021
// 30.Try finding your ancestors and offspring with code. Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f). If the number is **negative**, return the related ancestor. If **positive**, return the **related descendant**.You are generation `0`. In the case of `0` (male or female), return `"me!"`.
console.log('30.Try finding your ancestors and offspring with code. Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f). If the number is **negative**, return the related ancestor. If **positive**, return the **related descendant**.You are generation `0`. In the case of `0` (male or female), return `"me!"`.')

const data = {
    "-3": { "m": "great grandfather", "f": "great grandmother" },
    "-2": { "m": "grandfather", "f": "grandmother" },
    "-1": { "m": "father", "f": "mother" },
    "0": { "m": "me!", "f": "me!" },
    "1": { "m": "son", "f": "daughter" },
    "2": { "m": "grandson", "f": "granddaughter" },
    "3": { "m": "great grandson", "f": "great granddaughter" }
}

const generation = (num, relation) => {
    return data[num][relation]
}

generation(2, "f") // "granddaughter"
generation(-3, "m") // "great grandfather"
generation(1, "f") // "daughter"

//ends here


// 31.Create a function which returns the number of true values there are in an array.
console.log('31.Create a function which returns the number of true values there are in an array.')

const countTrue = (arr) => {
    if (arr.length > 0) {
        const filter = arr.filter((item) => item === true)
        return filter.length
    } else {
        return 0
    }
}

countTrue([true, false, false, true, false]) // 2
countTrue([false, false, false, false]) // 0
countTrue([]) // 0

//ends here












