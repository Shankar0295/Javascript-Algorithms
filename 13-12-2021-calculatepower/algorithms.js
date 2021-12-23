//13/12/2021
// 51.Create a function that takes voltage and current  and returns the calculated power.
console.log("51.Create a function that takes voltage and current  and returns the calculated power.")

const circuitPower = (voltage, current) => {
    return voltage * current
}

circuitPower(230, 10) // 2300
circuitPower(110, 3) // 330
circuitPower(480, 20) // 9600