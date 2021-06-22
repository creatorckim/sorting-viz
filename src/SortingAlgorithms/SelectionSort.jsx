function SelectionSort(array) {
    let turnsArray = [];
    let unsortedArray = array.slice();
    for (let i = 0; i < unsortedArray.length - 1; i++) {

        let smallest = i;
        for (let j = i + 1; j < unsortedArray.length; j++) {
            if (unsortedArray[j] <= unsortedArray[smallest]) {
                turnsArray.push([j, i]);
                [unsortedArray[i], unsortedArray[j]] = [unsortedArray[j], unsortedArray[i]];
            } else {
                turnsArray.push([i, j]);
            }

        }

    }

    return turnsArray;
}

export default SelectionSort;