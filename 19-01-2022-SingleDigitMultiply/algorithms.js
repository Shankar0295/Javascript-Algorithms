// 99. Create a function that takes one, two or more numbers as arguments and adds them together to get a new number.  The function then repeatedly multiplies the digits of the new number by each other, yielding a new number, until the product is only 1 digit long. Return the final product.
console.log('99. Create a function that takes one, two or more numbers as arguments and adds them together to get a new number.  The function then repeatedly multiplies the digits of the new number by each other, yielding a new number, until the product is only 1 digit long. Return the final product.')

//Function for adding the values
const sumDigProd = (...args) => {
    let addresult = 1
    const add = args.reduce((el, acc) => {
        acc = el + acc
        return acc
    }, 0)
    if (add >= 9) { return multiply(add) }// for multiply
    else { return add }// return if single digit
}

//for multiply until single digit
const multiply = (add) => {
    let arr = add.toString().split('');
    const result = arr.reduce((el, acc) => {
        acc = el * acc
        return acc
    }, 1)
    if (result >= 9) { return multiply(result) }// call fn., again if not single digit
    else { return result }// else return result
}

sumDigProd(16, 28) // 6

sumDigProd(0) // 0

sumDigProd(1, 2, 3, 4, 5, 6) // 2