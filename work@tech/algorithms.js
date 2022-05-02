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

const avgWeight = (arr) => {
    const result = arr.reduce((acc, item) => {
        return acc += item
    }, 0)
    return result
}
avgWeight([40.75, 45.2, 55.3, 49.5, 43.3, 54.1, 38.4, 63.8, 45.2, 58.25])


const oddEven = (arr) => {
    const res = arr.map((item) => {
        if (item % 2 == 0) {
            return "EVEN"
        } else {
            return "ODD"
        }
    })
    return res
}
oddEven([23, 12, 44, 32])

const fibonacci = (num) => {
    let n1 = 0;
    let n2 = 1;
    let next_num = 0;
    let arr = []
    if (num >= 1) {
        for (let i = 1; i < num - 1; i++) {
            next_num = n1 + n2;
            n1 = n2;
            n2 = next_num;
            arr.push(next_num)
        }
        return [0, 1, ...arr]
    } else {
        return 0
    }

}
fibonacci(8)
fibonacci(2)
fibonacci(1)
fibonacci(5)
fibonacci(10)

'Given a two-digit number n, print both the digits of the number.'

const twoDigitNum = (num) => {
    return num.toString().split('')
}

twoDigitNum(34)
twoDigitNum(45)

const divisibleBy6 = (num) => {
    if (num % 66 == 0) return 'True'
    else return 'False'
}
divisibleBy6(457)
divisibleBy6(66)
divisibleBy6(0)
divisibleBy6(40)

//Convert tempeature to farenheit
const tempToFheit = (num) => {
    const converter = (9 * num / 5) + 32
    return converter.toFixed(2)
}

tempToFheit(34.52)
tempToFheit(12)

//Seven up and down
const sevenUpDown = (num) => {
    if (num > 7) { return "UP" }
    else if (num == 7) { return "EQUAL" }
    else { return "DOWN" }
}

sevenUpDown(12)
sevenUpDown(7)
sevenUpDown(45)

