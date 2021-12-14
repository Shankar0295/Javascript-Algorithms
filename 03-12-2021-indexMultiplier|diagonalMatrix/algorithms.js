//03/12/2021
// 44.Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.
console.log('44.Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.')

const indexMultiplier = (arr) => {
  const result = arr.reduce((acc, item, index) => {
    return acc += item * index
  }, 0)
  return result
}

indexMultiplier([1, 2, 3, 4, 5]) // 40
// (1*0 + 2*1 + 3*2 + 4*3 + 5*4)

indexMultiplier([-3, 0, 8, -6]) // -2
// (-3*0 + 0*1 + 8*2 + -6*3)
//ends here

// 45.Given a square matrix (i.e. same number of rows as columns), its trace is the sum of the entries in the main diagonal (i.e. the diagonal line from the top left to the bottom right.
console.log('45.Given a square matrix (i.e. same number of rows as columns), its trace is the sum of the entries in the main diagonal (i.e. the diagonal line from the top left to the bottom right.')
const trace = (matrix) => {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === j) sum += matrix[i][j]
    }
  }
  return sum
}

trace([
  [1, 4],
  [4, 1]
]) // 2

trace([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]) // 15

trace([
  [1, 0, 1, 0],
  [0, 2, 0, 2],
  [3, 0, 3, 0],
  [0, 4, 0, 4]
]) // 10
