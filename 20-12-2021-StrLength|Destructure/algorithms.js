// 20/12/2021
// 56.Given a string, return true if its length is even or false if the length is odd.
console.log("56.Given a string, return true if its length is even or false if the length is odd.")

const oddOrEven = (str) => {
    return (str.length % 2 === 0) ? true : false
}

oddOrEven("apples") // true
oddOrEven("pears") // false
oddOrEven("cherry") // true
//ends here

// 57.ES6: Destructuring Arrays write a function with desturcturing and return a and b (1,2)
console.log("57.ES6: Destructuring Arrays write a function with desturcturing and return a and b (1,2)")

const arr = [1, 2, 3, 4, 5, 6]
const [a, b] = arr


console.log(a) // outputs 1
console.log(b) // outputs 2

//ends here 