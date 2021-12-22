//09/12/2021
// 49.Write five adder functions // closures 
console.log("49.Write five adder functions")// closures 

const adder = (num) => {
    return y => num + y
}

const add2 = adder(2)
const add3 = adder(3)
const add5 = adder(5)
const add7 = adder(7)
const add11 = adder(11)

add2(2) // should return 2 + x.
add3(3) // should return 3 + x.
add5(5) // should return 5 + x.
add7(7) // should return 7 + x.
add11(11) //  should return 11 + x.