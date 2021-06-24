function MergeSort(array) {
    let turnsArray = [];
    let unsortedArray = array.slice();
    let indexArray = [];

    for (let i = 0; i < unsortedArray.length; i++) {
        indexArray[i] = [i, unsortedArray[i]];
    }    

    sort(turnsArray, indexArray);

    return turnsArray;
}

const sort = (turns, array) => {

    if (array.length <= 1) {
        return array;
    }

    let middle = (array.length / 2);
    let leftArray  = array.slice(0, middle);
    let rightArray = array.slice(middle);

    return merge(turns, sort(turns, leftArray), sort(turns, rightArray));
}

const merge = (turns, left, right) => {

    let newArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex][1] < right[rightIndex][1]) {
            turns.push([left[leftIndex][0], right[rightIndex][0]]);
            newArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            turns.push([right[rightIndex][0], left[leftIndex][0]]);
            let temp = left[leftIndex][0];
            left[leftIndex][0] = right[rightIndex][0];
            right[rightIndex][0] = temp;
            newArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    while (leftIndex < left.length) {
        turns.push([left[leftIndex][0], left[leftIndex][0]]);
        newArray.push(left[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < right.length) {
        turns.push([right[rightIndex][0], right[rightIndex][0]]);
        newArray.push(right[rightIndex]);
        rightIndex++;
    }

    // return newArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    return newArray;
    
}

export default MergeSort;