//02-12-2021
// '42.Create a function that takes an array of numbers `arr`, a string `str` and return an array of numbers as per the following rules:`"Asc"` returns a sorted array in ascending order.`"Des"` returns a sorted array in descending order.`"None"` returns an array without any modification.'
console.log('42.Create a function that takes an array of numbers `arr`, a string `str` and return an array of numbers as per the following rules:`"Asc"` returns a sorted array in ascending order.`"Des"` returns a sorted array in descending order.`"None"` returns an array without any modification.')

const ascDesNone = (arr, type) => {
    return result = (type === "Asc") ? ([...arr].sort((a, b) => a < b ? -1 : 0)) :
        (type === "Des") ? ([...arr].sort((a, b) => a > b ? -1 : 0)) :
            arr
}

ascDesNone([4, 3, 2, 1], "Asc") // [1, 2, 3, 4]
ascDesNone([7, 8, 11, 66], "Des") // [66, 11, 8, 7]
ascDesNone([1, 2, 3, 4], "None") // [1, 2, 3, 4]
//ends here

// 43.Create a function which concatenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.
console.log('43.Create a function which concatenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.')

const jazzify = (arr) => {
    const result = arr.toString();
    return (arr.length > 0) ? (result.includes(7) ? arr : arr.map(item => item + 7)) :
        []
}


jazzify(["G", "F", "C"]) // ["G7", "F7", "C7"]
jazzify(["Dm", "G", "E", "A"]) // ["Dm7", "G7", "E7", "A7"]
jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]) // ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
jazzify([]) // []