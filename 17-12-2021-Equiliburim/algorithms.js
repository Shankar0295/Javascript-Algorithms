// 17/12/2021
// 55.Write a function that returns the boolean true if the given number is zero, the string 'positive' if the number is greater than zero or the string 'negative' if it's smaller than zero.
console.log("55.Write a function that returns the boolean true if the given number is zero, the string 'positive' if the number is greater than zero or the string 'negative' if it's smaller than zero.")

const equiliburim = (num) => {
    return (num > 0) ? 'positive' : (num < 0) ? 'negative' : true
}

equiliburim(0)
equiliburim(1)
equiliburim(-1)