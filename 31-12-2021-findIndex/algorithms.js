//31/12/2021
// 74. Create a function that takes an array and a string as arguments and return the index of the string.
console.log('74. Create a function that takes an array and a string as arguments and return the index of the string.')

const findIndex = (arr, str) => {
    const index = arr.findIndex(item => {
        return item.indexOf(str) > -1
    })
    return index
}


findIndex(["hi", "edabit", "fgh", "abc"], "fgh") // 2

findIndex(["Red", "blue", "Blue", "Green"], "blue") // 1

findIndex(["a", "g", "y", "d"], "d") // 3

findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") // 0