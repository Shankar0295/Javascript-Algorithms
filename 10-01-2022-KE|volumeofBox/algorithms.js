// 10/01/2022
// 84. Calculate kinetic energy with the given mass and velocity.
console.log('84. Calculate kinetic energy with the given mass and velocity.')

const KineticEnergy = (m, v) => {
    return 1 / 2 * (m * v * v)
}

KineticEnergy(60, 3) // 270

//ends here

// 85. Calculate volume of the box with given width,length and height
console.log('85. Calculate volume of the box with given width,length and height')

const Volume = (l, b, h) => {
    return l * b * h
}

Volume(2, 5, 1) // 10