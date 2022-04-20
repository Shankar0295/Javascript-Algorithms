const positiveCumulativeSum = (arr) => {
    let arr1 = []
    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            arr1[i] = arr[i]
        } else {
            arr1[i] = arr[i] + arr1[i - 1]
        }
    }
    const res = arr1.filter(item => item > 0)
    return res
}
positiveCumulativeSum([1, -2, 3, 4, -6])