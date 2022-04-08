//25/10/2021
//1. Evenness Algorithm(odd one out)
console.log('Evenness/Odd one out')
const arr = [1, 2, 1, 1]
function evenness(number) {
    let odd = 0;
    let even = 0;
    let position = 0;
    let x = []
    let y = []
    for (let i = 0; i < number.length; i++) {
        //Odd
        odd = number[i] % 2
        if (odd !== 0) {
            odd = number.indexOf(number[i], position)
            position = odd + 1
            x.push(position)
        } else {
            even = number.indexOf(number[i], position)
            position = even + 1
            y.push(position)
        }
    }
    if (x.length < y.length) {
        return x
    } else {
        return y
    }
}

console.log(evenness(arr))
//Evenness ends here
// ****************************************

//26/10/2021
// 2. ROT13 Algorithm
console.log('Cipher ROT13')
function ciperText(str) {
    //added +13 alphabets in lowercase and uppercase letter
    let originalAlphabets = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM'
    return str.replace(/[a-z]/gi, cipher => originalAlphabets[originalAlphabets.indexOf(cipher) + 13])
}
console.log(ciperText("ROT13"))
console.log(ciperText("JavaScript13"))
// ROT13 Algorithm Ends Here
// ****************************************

//27/10/2021
//3. Pig It
console.log("Move the first letter of each word to the end of it, then add 'ay' to the end of the word. Leave punctuation marks untouched.")

const pigIt = (str) => {
    str = str.split(" ")
    const res = str.map((item) => {
        return item.match(/[A-z]/gi) ? `${item.substr(1)}${item.substr(0, 1)}ay` : item
    })
    return res
}

pigIt("Hello World !")
pigIt("!!!!!!")
pigIt("34234234")
//Pig It ends here
// ****************************************

//29/10/2021
//4. Pangram(contains all letters in alphabet)
console.log('A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant). Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.')

const pangram = (str) => {
    let x = str.match(/[a-z]/gi)
    const alphabet = [...new Set(x)]//To filter duplicates
    return (alphabet.length >= 26) ? true : false
}

console.log(pangram("The quick brown fox jumps over the lazy dog"))
console.log(pangram("Hi, I am JavaScript"))
console.log(pangram("The quick brown fox jumps over the lazy dog123!!!"))
//Pangram ends here
// ****************************************

//29/10/2021
// 5. Move non zeros to end of the array
console.log('Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.')

const moveToZero = (arr) => {
    let newArray = [];
    let x = arr.map((item) => {
        if (item == 0) {
            return newArray.push(item)
        }
    })
    let y = arr.filter(item => item !== 0)
    return y.concat(newArray)
}

//Method 2
const moveToZero = (arr) => {
    let x = arr.filter(item => item === 0)
    let y = arr.filter(item => item !== 0)
    return [...y, ...x]
}

console.log(moveToZero([0, 0, 1, true, "Hi", 0, 3, 0, 5]))//with zero
console.log(moveToZero([1, true, "Hi", 5]))//without zero
console.log(moveToZero([0, 0, true, 0, 0, "Hi", 5, 0, 0]))// with zero
//  ends here
// ****************************************


//01/11/2021
// 6. Outliner
console.log('You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.')

const outliner = (arr) => {
    odd = [];
    even = [];
    arr.map((item) => {
        if (item % 2 == 0) {
            even.push(item)
        } else {
            odd.push(item)
        }
    })

    if (even.length < odd.length) {
        return even
    } else {
        return odd
    }
}

console.log(outliner([2, 4, 100, 4, 11, 2602, 36]))
console.log(outliner([160, 3, 1719, 19, 11, 13, -21]))
//Outliner ends here


//02/11/2021
// 7.Sort and return the highest number that can be made out of it
console.log('7.Given an array of numbers, return the highest number that can be made out of it.')

const array = (arr) => {
    let str = ''
    let sort = arr.sort().reverse()
    for (let i = 0; i < sort.length - 1; i += 2) {
        let ab = `${sort[i]}${sort[i + 1]}`
        let ba = `${sort[i + 1]}${sort[i]}`
        const result = (parseInt(ab) > parseInt(ba)) ? str += ab : str += ba
    }
    return parseInt(str)

}

array([3, 6, 0, 9])// 9630
array([1, 34, 3, 98, 9, 76, 45, 4])//998764543431

//Sort ends here

//03/11/2021
// 8.Find Vowels and print the length of it
console.log('8.Write a JavaScript function that accepts a string as a parameter and counts and returns the number of vowels within the string.')

const vowels = (str) => {
    let x = str.match(/[aeiou]/gi).length
    return x
}

console.log(vowels('Javascript Programmer'))
console.log(vowels('Developer'))

//Ends here


//04/11/2021
// 9. Print nos from 1 to 100, print Fizz for multiples of 3 and print 5 for multiples of 5
console.log('9. Write a program that prints the numbers from 1 to 100 and for multiples of ‘3’ print “Fizz” instead of the number and for the multiples of ‘5’ print “Buzz”.')

let n = 100;
let arr = [];
const printFn = () => {
    for (let i = 0; i <= n; i++) {
        arr.push(i)
    }
    console.log(arr)
    const x = arr.map((item) => {
        if (item % 3 === 0) {
            return 'Fizz'
        } else if (item % 5 === 0) {
            return 'Buzz'
        } else {
            return item
        }
    })
    return x
}

console.log(printFn())

//Method 2
const printFn = () => {
    const arr = Array.from(Array(100).keys())
    const x = arr.map((item) => {
        if (item % 3 === 0) {
            return 'Fizz'
        } else if (item % 5 === 0) {
            return 'Buzz'
        } else {
            return item
        }
    })
    return x
}

printFn()

//Ends here


//05/11/2021
// 10. Find the second largest number in an array.

console.log('10. Find the second largest number in an array.')

const largerstNos = (arr) => {
    let x = Math.max(...arr)//for finding max
    let y = arr.filter((item) => item != x)// for filtering max
    if (y == '') {// if no largest is available
        return "No Second largest available"
    } else {// for finding second largest
        let z = Math.max(...y)
        return z
    }

}

//Method 2
const largerstNos = (arr) => {
    const first = Math.max(...arr)
    const filter = arr.filter(item => item !== first.toString())
    return (filter == '') ? 'No Second Largest' : Math.max(...filter)
}

console.log(largerstNos(['20', '120', '111', '215', '54', '78']))
console.log(largerstNos(['100', '500', '678', '800', '400', '900']))
console.log(largerstNos(['10', '10', '10']))

//ends here

//08/11/2021
// 11.Create a function that takes the age in years and returns the age in days.
console.log('11.Create a function that takes the age in years and returns the age in days.')
//Solution 1
const ageCalc = (age) => {
    let date = new Date()//get current date
    let year = date.getFullYear();//get current year
    let birthYear = (year - age)//get diff in year between current year and age
    let leapDays = age / 4// get leap days between current year and birthyear
    let leapDaysRounded = Math.ceil(leapDays)// round off leap days
    let Days = (year - birthYear) * 365// get age in days
    let ageInDays = Days + leapDaysRounded// add days and leapdays
    return "You are" + ' ' + ageInDays + " days old"

}

//Solution 2 by akka
const calcAge = (age) => {
    let gettingLeapDays = Math.ceil(age / 4);
    let gettingAgeinDays = (age * 365) + gettingLeapDays
    return gettingAgeinDays
}

ageCalc(65)
ageCalc(0)
ageCalc(20)
ageCalc(27)
// ends here

//09/11/2021
// 12.Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
console.log('12.Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.')

const arrayOfMultiples = (num, length) => {
    let arr = [];
    for (let i = 1; i <= length; i++) {
        arr.push(num * i)
    }
    return arr
}

arrayOfMultiples(7, 5)
arrayOfMultiples(12, 10)
arrayOfMultiples(17, 6)

// ends here

// 10/11/2021
// 13. Create a function that, given an array similar to the above, sorts the array according to the "content of the elements
console.log('13.Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".')

const sortIt = (arr) => {
    let y = arr.sort();
    return y
}

sortIt([4, 1, 3])
sortIt([[4], [1], [3]])
sortIt([4, [1], 3])
sortIt([[4], 1, [3]])
sortIt([[3], 4, [2], [5], 1, 6])
// ends here

// 11/11/2021
// 14.Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.
console.log('14.Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.')


const calculator = (a, b, c) => {
    if (c == 0 && b == '/') return "Can't divide by 0!"
    if (b == '+') return a + c
    if (b == '-') return a - c
    if (b == '*') return a * c
    if (b == '/') return a / c


}

calculator(2, "+", 2)

calculator(4, "-", 2)

calculator(2, "*", 2)

calculator(4, "/", 2)

calculator(4, "/", 0)
// ends here

//12/11/2021
// 15. 'An array is special if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.'
console.log('An array is special if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.')

const isSpecial = (arr) => {
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== i % 2) {
            return false
        }
    }
    return true
}

isSpecial([2, 7, 4, 9, 6, 1, 6, 3])
isSpecial([2, 7, 9, 1, 6, 1, 6, 3])
isSpecial([2, 7, 8, 8, 6, 1, 6, 3])

//ends here

// 15/11/2021
// '16.Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. Create a function that takes an array and returns the sum of all numbers in the array.'
console.log('16.Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. Create a function that takes an array and returns the sum of all numbers in the array.')

const numbersSum = (arr) => {
    // console.log(arr)
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) == 'number') {
            count += arr[i]
        }
    }
    return count
}

//Method 2
const numbersSum = (arr) => {
    const res = arr.reduce((acc, item) => {
        if (typeof item == 'number') {
            acc += item
        }
        return acc
    }, 0)
    return res
}

numbersSum([1, 2, "13", "4", "645"]) // 3

numbersSum([true, false, "123", "75"]) //0

numbersSum([1, 2, 3, 4, 5, true]) //15

//ends here

// 15/11/2021
// '17.A tetrahedron is a pyramid with a triangular base and three sides. A tetrahedral number is a number of items within a tetrahedron. Create a function that takes an integer n and returns the nth tetrahedral number.'
console.log('17.A tetrahedron is a pyramid with a triangular base and three sides. A tetrahedral number is a number of items within a tetrahedron. Create a function that takes an integer n and returns the nth tetrahedral number.')

const tetra = (num) => {
    return ((num * (num + 1) * (num + 2)) / 6)//formula for nth tetrahedron number
}

tetra(2)
tetra(5)
tetra(6)
//ends here

// 16/11/2021
// '18.Write a function that converts an object into an array of keys and values.'

console.log('18.Write a function that converts an object into an array of keys and values.')
const objectToArray = (obj) => {
    return (Object.entries(obj))
}

objectToArray({ D: 1, B: 2, C: 3 })
objectToArray({ likes: 2, dislikes: 3, followers: 10 })
//ends here

// 16/11/2021
// 19."Create a function that takes a country\'s name and its area as arguments and returns the area of the country\'s proportion of the total world\'s landmass. The total world\'s landmass is 148,940,000'
console.log('19."Create a function that takes a country\'s name and its area as arguments and returns the area of the country\'s proportion of the total world\'s landmass. The total world\'s landmass is 148,940,000')

const areaOfCountry = (name, area) => {
    const totalLandMass = 148940000
    let countryPercentage = (area / totalLandMass) * 100
    let occPercentage = countryPercentage.toFixed(2)
    let x = name + " " + "is" + " " + occPercentage + "% " + "of the total world\'s landmass"
    return x
}

areaOfCountry("Russia", 17098242);
areaOfCountry("USA", 9372610);
areaOfCountry("Iran", 1648195);

//ends here

// 17/11/2021
// 20."Create a function that will return an integer number corresponding to the amount of digits in the given integer"
console.log('20."Create a function that will return an integer number corresponding to the amount of digits in the given integer')

const num_of_digits = (num) => {
    let x = num.toString().split("")
    return x.length
}

num_of_digits(1000)
num_of_digits(12)
num_of_digits(1305981031)
num_of_digits(0)

//ends here

// 17/11/2021
// 21.Create a function which counts how many lone 1s appear in a given number. Lone means the number doesn't appear twice or more in a row.'
console.log('21.Create a function which counts how many lone 1s appear in a given number. Lone means the number doesn\'t appear twice or more in a row.')

const countLoneOnes = (num) => {
    let count = 0;
    let arr = num.toString().split("")
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes('1') && arr[i - 1] !== '1' && arr[i + 1] !== '1') {
            count += 1
        }
    }
    return count;
}

countLoneOnes(101) //2
countLoneOnes(1191) //1
countLoneOnes(1111) //0
countLoneOnes(462) //0

//ends here

// 18/11/2021
// 22.Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
console.log('22.Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".')

const sevenBoom = (arr) => {
    let x = arr.toString().split("")
    let y = (x.includes('7')) ? "Boom!" : "There is no 7 in the array"
    return y
}

sevenBoom([1, 2, 3, 4, 5, 6, 7]) // 'Boom!'
sevenBoom([2, 55, 60, 97, 86]) // 'Boom!'
sevenBoom([8, 6, 33, 100]) // "There is no 7 in the array" 

//ends here

// 18/11/2021
// '23.Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".'
console.log('23.Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".')

const oddishOrEvenish = (num) => {
    let x = num.toString().split("")
    const oddEven = x.map((item) => parseInt(item))
        .reduce((acc, value) => {
            let total = acc + value
            return total
        }, 0)
    let z = (oddEven % 2 == 0) ? "Evenish" : "Oddish"
    return z

}

oddishOrEvenish(43) // "Oddish"
oddishOrEvenish(373) // 'Oddish'
oddishOrEvenish(4433) // 'Evenish'

//ends here

// 19/11/2021
// 24.You have to create a function that takes two integers n and d and makes an array of squares of all numbers from 0...<= n and returns the count of the digits d in the array.
console.log('24.You have to create a function that takes two integers n and d and makes an array of squares of all numbers from 0...<= n and returns the count of the digits d in the array.')

const countDigits = (num, digit) => {
    let arr = []
    let count = 0;
    let d = digit.toString()
    arr = [...Array(num)].map((_, i) => i + 1);
    arr = arr.map((x) => x * x).toString().split("")
    arr.map((item) => {
        if (item.includes(d)) {
            count += 1
        }
    })
    return count
}

countDigits(25, 2) // 9
countDigits(10, 1) // 4

//ends here

// 19/11/2021
// 25.Create a function that takes in a number as a string `n` and returns the number without trailing and leading zeros.
console.log('25.Create a function that takes in a number as a string `n` and returns the number without trailing and leading zeros.')

const removeLeadingTrailing = (str) => {
    let num = parseFloat(str);
    return num.toString()
}
removeLeadingTrailing("230.000") // "230"
removeLeadingTrailing("00402") // "402"
removeLeadingTrailing("03.1400") // "3.14"
removeLeadingTrailing("30") // "30"
removeLeadingTrailing("4.0") // "4"
//ends here

