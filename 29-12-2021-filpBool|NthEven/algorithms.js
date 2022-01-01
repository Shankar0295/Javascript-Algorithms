//29/12/2021
// 70.Flip the Boolean Due to a programming concept known as **truthiness**, certain values can be evaluated to (i.e. take the place of) booleans. For example, 1 (or any number other than 0) is often equivalent to `true`, and 0 is often equivalent to `false`.Create a function that returns the opposite of the given boolean, as a number.
console.log('70.Flip the Boolean Due to a programming concept known as **truthiness**, certain values can be evaluated to (i.e. take the place of) booleans. For example, 1 (or any number other than 0) is often equivalent to `true`, and 0 is often equivalent to `false`.Create a function that returns the opposite of the given boolean, as a number.')

const flipBool = (bool) => {
    const result = !bool
    return result == false ? 0 : 1
}


flipBool(true) // 0

flipBool(false) // 1

flipBool(1) // 0

flipBool(0) // 1

//ends here

// 71. Nth Even Number Create a function that takes a number `n` and returns the `n`th even number beginning with 0 as the fist.
console.log('71. Nth Even Number Create a function that takes a number `n` and returns the `n`th even number beginning with 0 as the fist.')

const nthEven = (num) => {
    let result = ''
    arr = [...Array(num)].map((_, i) => i * 2);
    for (let i = 0; i < arr.length; i++) { (arr[i] % 2 == 0) ? result = arr[i] : '' }
    return result
}


nthEven(1) // 0
// 0 is first even number

nthEven(2) // 2
// 2 is second even number

nthEven(100) // 198