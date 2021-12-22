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

// 47. The police send you an electronic statement for you to sign. As you begin to sign, an error pops up. Apparently, they sent you a protected document.This challenge is a bit different as the function you are given already contains some code that you should not change or remove. Also, **don't** do a return statement, it is already included. Your task is, given an object, prevent changes to that object."
console.log("47. The police send you an electronic statement for you to sign. As you begin to sign, an error pops up. Apparently, they sent you a protected document.This challenge is a bit different as the function you are given already contains some code that you should not change or remove. Also, **don't** do a return statement, it is already included. Your task is, given an object, prevent changes to that object.")

const obj = { noChanges: true }

const preventChanges = (obj) => {
    // Write your code here, don't use a return statement
    Object.freeze(obj);
    obj.noChanges = false;
    obj.signature = "whatever"
    return obj;

}

preventChanges(obj) // { noChanges: true }