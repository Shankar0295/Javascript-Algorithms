// 03/01/2022
// 75.For this challenge, you will NOT be given a string. Your task isn\'t to add "\Do not\" before the given string. If there is no given string, you will not return \"Do not do anything.\" Do not check the examples to know how to do this challenge.
console.log('75.For this challenge, you will NOT be given a string. Your task isn\'t to add "\Do not\" before the given string. If there is no given string, you will not return \"Do not do anything.\" Do not check the examples to know how to do this challenge.')

const reversePsychology = (str) => {
    return (str.length > 0) ? `Do not ${str}` : 'Do not do anything'
}


reversePsychology("wash the dishes") // "Do not wash the dishes."

reversePsychology("eat your lunch") // "Do not eat your lunch."

reversePsychology("go to school") // "Do not go to school."

reversePsychology("") // "Do not do anything."

//ends here

// 76. Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return `1`.
console.log('76. Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return `1`.')

const search = (arr, num) => {
    return arr.indexOf(num)
}


search([1, 2, 3, 4], 3) // 2
search([2, 4, 6, 8, 10], 8) // 3
search([1, 3, 5, 7, 9], 11) // -1