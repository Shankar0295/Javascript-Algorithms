// 25/11/2021
// 32.For this challenge, forget how to add two numbers together. And follow the example below.
console.log('32.For this challenge, forget how to add two numbers together. And follow the example below.')

const memeSum = (num1, num2) => {
    let arr1 = num1.toString().split("")
    let arr2 = num2.toString().split("")

    const lengthCheck = (arr1.length < arr2.length) ? arr1.unshift('0') :
        (arr2.length < arr1.length) ? arr2.unshift('0') : ""

    const add = arr1.map((item, idx) => {
        return parseInt(item) + parseInt(arr2[idx])
    })
    return parseInt(add.join(""))
}

memeSum(26, 39) // 515
memeSum(122, 81) // 1103
memeSum(1222, 30277) // 31499
//ends here

// 33.A repdigit is a positive number composed out of the same digit. Create a function that takes an integer and returns whether it\'s a repdigit or not.
console.log('33.A repdigit is a positive number composed out of the same digit. Create a function that takes an integer and returns whether it\'s a repdigit or not.')

const isRepdigit = (num) => {
    let arr = []
    if (num > 0) {
        arr.push(num);
        let splitedArr = arr.toString().split("")
        for (let i = 0; i < arr.length; i++) {
            if (splitedArr[i + 1] === splitedArr[i]) {
                return true
            }
        }
    } else if (num == 0) {
        return true
    } else {
        return false
    }

}

isRepdigit(66) // true
isRepdigit(0) // true
isRepdigit(-11) // false