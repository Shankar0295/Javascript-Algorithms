// 06/12/2021
// 46. According to the lodash documentation, `_.drop` creates a slice of an array with n elements dropped from the beginning.Your challenge is to write your own version using vanilla JavaScript.
console.log('46. According to the lodash documentation, `_.drop` creates a slice of an array with n elements dropped from the beginning.Your challenge is to write your own version using vanilla JavaScript.')

const drop = (arr, num) => {
    return arr.slice(num)
}

drop([1, 2, 3], 1) // [2, 3]
drop([1, 2, 3], 2) // [3]
drop([1, 2, 3], 5) // []
drop([1, 2, 3], 0) // [1, 2, 3]

//ends here

