function SelectionSort(array) {
    let turnsArray = [];
    let unsortedArray = array.slice();
    for (let i = 0; i < unsortedArray.length - 1; i++) {
        // console.log(i);
        let smallest = i;
        for (let j = i + 1; j < unsortedArray.length; j++) {
            // console.log(j);
            if (unsortedArray[j] <= unsortedArray[smallest]) {
                turnsArray.push([j, i]);
                // let temp = unsortedArray[i];
                // unsortedArray[i] = unsortedArray[j];
                // unsortedArray[j] = temp;
                [unsortedArray[i], unsortedArray[j]] = [unsortedArray[j], unsortedArray[i]];
            } else {
                turnsArray.push([i, j]);
            }

        }

    }

    console.log(unsortedArray);
    return turnsArray;
}

export default SelectionSort;

// function SelectionSort(array) {
//     let turnsArray = [];
//     let unsortedArray = array.slice();
//     for (let i = 0; i < unsortedArray.length - 1; i++) {
//         // console.log(i);
//         let smallest = i;
//         for (let j = i + 1; j < unsortedArray.length; j++) {
//             // console.log(j);
//             if (unsortedArray[j] < unsortedArray[smallest]) {
//                 smallest = j;
//                 turnsArray.push([j, i]);
//             } else {
//                 turnsArray.push([i, j]);
//             }

//             // if (i !== smallest) {
//             //     [unsortedArray[i], unsortedArray[smallest]] = [unsortedArray[smallest], unsortedArray[i]];
//             // }
//             // let index = unsortedArray.indexOf(smallest);
//         }

//         let temp = unsortedArray[i];
//         unsortedArray[i] = unsortedArray[smallest];
//         unsortedArray[smallest] = temp;


//     }

//     // console.log(unsortedArray);
//     return unsortedArray;
// }

// export default SelectionSort;




// let turnsArray = [];

// function SelectionSort(array) {
//     let unsortedArray = array.slice();
//     for (let i = 0; i < unsortedArray.length; i++) {
//         let position = findSmallest(unsortedArray, unsortedArray.length, i);
//         let temp = unsortedArray[i];
//         unsortedArray[i] = unsortedArray[position];
//         unsortedArray[position] = temp;
//     }

//     return turnsArray;
// }

// function findSmallest(array, length, index) {
//     let newArray = array.slice();
//     let smallest = newArray[index];
//     let position = index;
//     for (let x = index + 1; x < length; x++) {
//         if (newArray[x] < smallest) {
//             smallest = newArray[x];
//             position = x;
//             turnsArray.push([x, index]);
//         } else {
//             turnsArray.push([index, x]);
//         }
//     }
//     return position;
// }

// export default SelectionSort;