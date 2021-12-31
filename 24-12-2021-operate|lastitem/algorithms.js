//24/12/2021
// 64. Many Operators! Some basic arithmetic operators are `+`, `-`, `*`, `/`, and `%`. In this challenge you will be given three parameters, `num1`, `num2`, and an `operator`. Use the operator on number 1 and 2.
console.log("64. Many Operators! Some basic arithmetic operators are `+`, `-`, `*`, `/`, and `%`. In this challenge you will be given three parameters, `num1`, `num2`, and an `operator`. Use the operator on number 1 and 2.")

const operate = (a, b, op) => {
    if (op == "+") return a + b
    else if (op == "-") return a - b
    else if (op == "%") return a % b
}

operate(1, 2, "+") // 3
// 1 + 2 = 3

operate(7, 10, "-") // -3
// 7 - 10 = -3

operate(20, 10, "%") // 0
// 20 % 10 = 0

//ends here

// 65. Create a function that accepts an array and returns the last item in the array.
console.log("65. Create a function that accepts an array and returns the last item in the array.")

const getLastItem = (arr) => {
    return arr.pop()
}

getLastItem([1, 2, 3]) // 3

getLastItem(["cat", "dog", "duck"]) // "duck"

getLastItem([true, false, true]) // true

