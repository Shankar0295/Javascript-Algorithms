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
