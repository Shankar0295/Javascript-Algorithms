// 26/11/2021
// 34. Write a function that divides an array into chunks of size n, where n is the length of each chunk.
console.log('34. Write a function that divides an array into chunks of size n, where n is the length of each chunk.')

const chunkify = (arr, n) => {
    let storedArr = []
    while (arr.length > 0) {
        storedArr.push(arr.splice(0, n))
    }
    return storedArr
}

chunkify([2, 3, 4, 5], 2) // [[2, 3], [4, 5]]
chunkify([2, 3, 4, 5, 6], 2) // [[2, 3], [4, 5], [6]]
chunkify([2, 3, 4, 5, 6, 7], 3) // [[2, 3, 4], [5, 6, 7]]
chunkify([2, 3, 4, 5, 6, 7], 1) // [[2], [3], [4], [5], [6], [7]]
chunkify([2, 3, 4, 5, 6, 7], 7) // [[2, 3, 4, 5, 6, 7]]


// 35.Create a function that takes an integer n and reverses it.
console.log('35.Create a function that takes an integer n and reverses it.')

const rev = (num) => {
    let sort = num.toString().split("").reverse().join("")
    let result = parseInt(sort)
    return result.toString()
}

rev(5121) //"1215"
rev(69) // "96"
rev(-122157) // "751221"