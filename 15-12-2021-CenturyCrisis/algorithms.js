// 15/12/2021
console.log("53. Century Crisis, Scientists have discovered that in four decades, the world will EXPLODE! It will also take three decades to make a spaceship to travel to a new planet that can hold the entire world population.You must calculate the number of people there will be in three decades from now.The variable `population` is the world population now.Assume that every month, someone gives birth to more people `n`.Return the number of people there will be when the spaceship is complete.")

const futurePeople = (population, n) => {
    let birth = 12 * n
    return population + (birth * 30)
}

futurePeople(256, 2) // 976
futurePeople(3248, 6) // 5408
futurePeople(5240, 3) // 6320
