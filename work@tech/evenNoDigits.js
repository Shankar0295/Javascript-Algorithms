const evenNumOfDigits = (arr) => {
    let arr1 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toString().length % 2 === 0) {
            arr1.push(arr[i])
        }
    }
    return arr1
}
evenNumOfDigits([42, 564, 5775, 34, 123, 454, 1, 5, 45, 3556, 23442])


