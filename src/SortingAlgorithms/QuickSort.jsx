function QuickSort(array) {
    let turnsArray = [];
    let unsortedArray = array.slice();

    sort(turnsArray, unsortedArray, 0, unsortedArray.length - 1);

    return turnsArray;
}

const sort = (turns, array, low, high) => {
    if (low < high) {
        let pivot = partition(turns, array, low, high);
        sort(turns, array, low, pivot - 1);
        sort(turns, array, pivot + 1, high);
    }
}

const partition = (turns, array, low, high) => {
    let pivot = array[low];
    let index = low;

    for (let i = low; i <= high; i++) {
        if (array[i] <= pivot) {
            let temp = array[index];
            array[index] = array[i];
            array[i] = temp;
            turns.push([i, index]);
            index++;
        } else {
            turns.push([index, i]);
        }
    }

    let temp = array[index - 1];
    array[index - 1] = array[low];
    array[low] = temp;
    turns.push([index - 1, low]);

    return index - 1;
}

export default QuickSort;