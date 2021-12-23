// 10/12/2021
// 50.A leap year happens every four years, so it's a year that is perfectly divisible by four. However, if the year is a multiple of 100 (1800, 1900, etc), the year must be divisible by 400.
console.log("50.A leap year happens every four years, so it's a year that is perfectly divisible by four. However, if the year is a multiple of 100 (1800, 1900, etc), the year must be divisible by 400.")

const leapYear = (year) => {
    return (year % 4 === 0 || year % 400 === 0)
}

leapYear(2020) // true
leapYear(2021) // false
leapYear(1800) // true
leapYear(1900) // true