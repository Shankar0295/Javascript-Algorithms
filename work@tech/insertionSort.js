const insertionSort = (arr) => {
    //1. loop through the array and take index 1 as first element
    for (let i = 1; i < arr.length; i++) {
        //2. make a for loop form right to left, starting i-1 to index 0
        for (let j = i - 1; j > -1; j--) {
            //3.value comparison using ascending order.
            if (arr[j + 1] < arr[j]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
            }
        }
    }
    return arr;
}
insertionSort([4, 2, 5, 3, 1])
insertionSort([11, 4, 200])
insertionSort([23, 1, 10, 5, 2])
insertionSort([5, 3, 6, 1, 4])
insertionSort([11, 15, 12, 10, -2])