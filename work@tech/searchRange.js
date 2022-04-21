const searchRange = (arr, num) => {
    return [arr.indexOf(num), arr.lastIndexOf(num)]
}
searchRange([1, 2, 3, 3, 3, 4, 4, 5], 3)
searchRange([1, 2, 3, 3, 3, 4, 4, 5], 9)