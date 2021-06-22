function BubbleSort(array) {
    let turnsArray = [];
    let unsortedArray = array.slice();
    for (let i = 0; i < unsortedArray.length; i++) {
        for (let j = 0; j < (unsortedArray.length - i - 1); j++) {
            if (unsortedArray[j] > unsortedArray[j + 1]) {
                turnsArray.push([j + 1, j]);
                let temp = unsortedArray[j];
                unsortedArray[j] = unsortedArray[j + 1];
                unsortedArray[j + 1] = temp;
            } else {
                turnsArray.push([j, j + 1]);

            }

        }
    }

    return turnsArray;
}

export default BubbleSort;