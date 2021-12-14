// 01/12/2021
// '40.Create a function that squares every digit of a number.'
console.log('40.Create a function that squares every digit of a number.')

const squareDigits = (num) => {
    return +Array.from(num.toString(), item => item * item).join('')
}

squareDigits(9119) // 811181
squareDigits(2483) // 416649
squareDigits(3212) // 9414

// '41.Create a function that moves all capital letters to the front of a word.'
console.log('41.Create a function that moves all capital letters to the front of a word.')

const capToFront = (str) => {
    return result = [...str].sort((a, b) => /[A-Z]/.test(b) < /[A-Z]/.test(a) ? -1 : 0).join('')
}

capToFront("hApPy") // "APhpy"
capToFront("moveMENT") // "MENTmove"
capToFront("shOrtCAKE") // "OCAKEshrt"