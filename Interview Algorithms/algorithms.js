// Palindrome

console.log('Write a simple function (less than 160 characters) that returns a boolean indicating whether or not a string is a [palindrome](http://www.palindromelist.net')

const isPalindrome = (str) => {
    str = str.replace(/\W/g, '').toLowerCase();
    return (str === str.split('').reverse().join(''))
}

isPalindrome("level")                  // logs 'true'
isPalindrome("levels")                 // logs 'false'
isPalindrome("A car, a man, a maraca") // logs 'true'

//Method 2
function checkPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    // find the length of a string
    const len = str.length;
    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {
        // check if first and last string are same
        if (str[i] !== str[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// call the function
checkPalindrome("level")                  // logs 'true'
checkPalindrome("levels")                 // logs 'false'
checkPalindrome("A car, a man, a maraca") // logs 'true'

//Balanced String algorithms
const input = (x) => {
    let arr = []
    let arr1 = []
    for (let i = 0; i < x.length; i++) {
        let y = x[i]
        y == '(' ? arr.push(y) : arr1.push(y)
    }
    if (arr1.length === arr.length) {
        console.log(arr.length, "Balanced string")
    } else {
        console.log(-1, "Unbalanced string")
    }
}

input("((((()))))")
input("()(((")

const cumulative = (arr) => {
    let arr1 = []
    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            arr1[i] = arr[i]
        } else {
            arr1[i] = arr[i] + arr1[i - 1]
        }
    }
    return arr1
}



cumulative([1, 2, 3, 4]) // [1, 3, 6, 10]
cumulative([1, 1, 1, 1, 1]) // [1, 2, 3, 4, 5]
cumulative([1, 3, 5, 7, 9]) // [1, 4, 9, 16, 25]


const fibonacci = (n1, n2, num) => {
    console.log(n1)
    console.log(n2)
    let next_num = 0
    for (let i = 0; i < num; i++) {
        next_num = n1 + n2
        n1 = n2;
        n2 = next_num
    }
    return n2
}
fibonacci(0, 1, 10)


function solution(number) {
    let sum = 0;
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i
        }
    }
    return sum
}
solution(10)


var isSquare = function (n) {
    return Math.sqrt(n) % 1 === 0
}
isSquare(25)

function nbYear(p0, percent, aug, p) {
    let yr = 0
    let percentage = percent / 100
    while (p0 < p) {
        p0 = Math.floor(p0 + (p0 * percentage) + aug)
        yr++
    }
    return yr
}
nbYear(1000, 2, 50, 1200)//3
nbYear(1500, 5, 100, 5000)//15
nbYear(1500000, 2.5, 10000, 2000000)//10
nbYear(1500000, 0.25, 1000, 2000000)//94

const binaryArrayToNumber = arr => {
    const binary = arr.join("")
    const result = parseInt(binary, 2)
    return result
};

binaryArrayToNumber([0, 0, 0, 1])
binaryArrayToNumber([1, 0, 1, 1])

function isPangram(string) {
    const str = string.match(/[a-z]/gi)
    const result = [...new Set(str)]
    return (result.length >= 26) ? true : false
}
isPangram("The quick brown fox jumps over the lazy dog.")
isPangram("Pack my box with five dozen liquor jugs.")
isPangram('Cwm fjord bank glyphs vext quiz')

function findOdd(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++
            }
        }
        if (count % 2 != 0) console.log(arr[i], "i")
    }
}
findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])
findOdd([0, 1, 0, 1, 0])
findOdd([1, 1, 2])
findOdd([7])
findOdd([0])

'Given an array A and an integer target, find the indices of the two numbers in the array whose sum is equal to the given target.'

const TwoSum = (arr, target) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            sum = arr[i] + arr[j + 1]
            if (sum == target) {
                return [i, j + 1]
            }
        }
    }
}

TwoSum([8, 2, 10, 4, 1, 3], 9)
TwoSum([2, 4, 2, 3, 2], 7)
TwoSum([1, 3, 3, 4], 5)

const validBraces = (s) => {
    const stack = [];

    for (let i = 0; i < s.length; i += 1) {
        const top = stack[stack.length - 1];
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        } else if (s[i] === ')' && top === '(' && stack.length !== 0) {
            stack.pop();
        } else if (s[i] === ']' && top === '[' && stack.length !== 0) {
            stack.pop();
        } else if (s[i] === '}' && top === '{' && stack.length !== 0) {
            stack.pop();
        } else {
            return false;
        }
    }

    return stack.length === 0;
}
validBraces("([{}])")
validBraces("(){}[]")
validBraces("[({})](]")


'Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.'

const url = (str) => {
    const res = str.replace('http://', '').replace('https://', '').replace('www.', '')
    return res.split('.')[0]
}

url("http://github.com/carbonfive/raygun") // domain name = "github"
url("http://www.zombie-bites.com")        // domain name = "zombie-bites"
url("https://www.cnet.com")          // domain name = cnet"
url("http://google.co.jp")
url("www.xakep.ru")


hastaggenerator = (str) => {
    const res = str.trim().split(' ');
    for (let i = 0; i < res.length; i++) {
        res[i] = res[i].charAt(0).toUpperCase() + res[i].slice(1)
    }
    const result = res.join('')
    if (result.length >= 140 || result == '') return false
    return `${'#'}${result}`
}
hastaggenerator(" Hello there thanks for trying my Kata")
hastaggenerator("    Hello     World   ") // "#HelloWorld"
hastaggenerator("")
hastaggenerator("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat")
hastaggenerator("#Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")

//Object flattening && recursion
const obj = {
    name: "test",
    address: {
        personal: {
            building: ['perosnal', 'persnal2'],
            street: 'personal street',
            personal_new: {
                building: 'personal_new',
                street: 'personal_new street',
            }
        },
        office: {
            building: 'random',
            street: 'some street'
        }
    }
}

let finalObj = {}
const flattenObj = (obj, name) => {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            flattenObj(obj[key], name + '_' + key)
        } else {
            finalObj[name + '_' + key] = obj[key]
        }
    }
    return finalObj
}
flattenObj(obj, 'user')

const substrChar = (str) => {
    let longestStringLen = 0;
    for (let i = 0; i <= str.length; i++) {
        let currentStringSet = new Set();
        for (let j = i; j < str.length; j++) {
            if (currentStringSet.has(str[j])) {
                break;
            } else {
                currentStringSet.add(str[j])
            }
        }
        longestStringLen = Math.max(longestStringLen, currentStringSet.size);
    }
    return longestStringLen
}
substrChar("abacadae")
substrChar("abcdaea")
