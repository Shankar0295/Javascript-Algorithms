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
    let x = str.split(" ");
    let word = x.map((item) => {
        return item.match(/[A-z]/i) ? `${item.substring(1)}${item.substring(0, 1)}` + "ay" : item
    })
    console.log(word)

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
    return (alphabet.length - 1) === 26;
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
// 7.Sort and print
console.log('7.Given an array of numbers, return the highest number that can be made out of it.')

const array = (arr) => {
    let str = ''
    let sort = arr.sort().reverse()
    for (let i = 0; i < sort.length; i++) {
        str = str + sort[i]
    }
    return str

}

console.log(array([3, 6, 0, 9]))
console.log(array([1, 34, 3, 98, 9, 76, 45, 4]))

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
    console.log(x)
}

console.log(printFn())

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

console.log(largerstNos(['20', '120', '111', '215', '54', '78']))
console.log(largerstNos(['100', '500', '678', '800', '400', '900']))
console.log(largerstNos(['10', '10', '10']))

//ends here
