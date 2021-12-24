//14/12/2021
// 52. Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
console.log("52. Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.")

const frames = (frames, minutes) => {
  return frames * (minutes * 60)
}

frames(1, 1) // 60
frames(10, 1) // 600
frames(10, 25) // 15000