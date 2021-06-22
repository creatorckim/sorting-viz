function InsertionSort(array) {
    let turnsArray = [];
    let unsortedArray = array.slice();
    for (let i = 1; i < unsortedArray.length; i++) {
        let temp = unsortedArray[i];
        let j = i - 1;
        while (j >= 0 && temp <= unsortedArray[j]) {
            unsortedArray[j + 1] = unsortedArray[j];
            turnsArray.push([j + 1, j]);
            j = j -1;
        }
        unsortedArray[j + 1] = temp;
    }

    return turnsArray;
}

export default InsertionSort;