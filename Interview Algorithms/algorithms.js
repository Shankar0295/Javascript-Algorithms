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