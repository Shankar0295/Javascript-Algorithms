const cube = (num) => {
    let surface = 6 * (num * num)
    let volume = num * num * num
    return [surface, volume]
}
cube(7)

const isPalindrome = (str) => {
    str = str.replace(/\W/g, '').toLowerCase();
    const x = (str === str.split('').reverse().join(''))
    return x ? "True" : "False"
}
isPalindrome('refer')
isPalindrome('roar')


const vowels = (str) => {
    const res = str.match(/[aeiou]/gi)
    return res.length
}
vowels('Neha')
vowels('Rajan')
vowels('Aamir')
vowels('Bonnie')
vowels('Ram')

const noOfWords = (str) => {
    const res = str.split(' ')
    return res.length
}
noOfWords('The quick brown fox jumped over the lazy dog.')

const simpleIntrest = (p, r, t) => {
    const Ins = (p * r * t) / 100
    return +Ins.toFixed(6)
}
simpleIntrest(1500, 1.4, 3)
simpleIntrest(2532.4, 6.33, 3.67)

const volumeofCyl = (r, h) => {
    const rup = (3.14 * (r * r) * h) * 40
    return rup / 1000
}
volumeofCyl(5, 24)

const Maxnum = (arr) => {
    const decider = Math.max(...arr)
    return (decider % 2 == 0) ? 'WON' : 'LOST'
}
Maxnum([12, 45, 234, 5674, 122])
