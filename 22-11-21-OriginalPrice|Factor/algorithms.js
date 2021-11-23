// 22/11/2021
// 27.Create a function that takes two arguments: the original `price` and the `discount` percentage as integers and returns the final price after the discount.
console.log('27.Create a function that takes two arguments: the original `price` and the `discount` percentage as integers and returns the final price after the discount.')

const dis = (price, discount) => {
    let discountPrice = (discount / 100) * price
    let finalPrice = price - discountPrice
    return finalPrice
}

dis(1500, 50) // 750
dis(89, 20) // 71.2
dis(100, 75) // 25 

//ends here

// 22/11/2021
// 26.A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:Create a function that determines whether or not an array is a factor chain.
console.log('26.A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:Create a function that determines whether or not an array is a factor chain.')

const factorChain = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] % arr[i] != 0) {
            return false
        }
    }
    return true
}

factorChain([1, 2, 4, 8, 16, 32]) // true
factorChain([1, 1, 1, 1, 1, 1]) // true
factorChain([2, 4, 6, 7, 12]) // false
factorChain([10, 1]) // false

//ends here