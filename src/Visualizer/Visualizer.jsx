import React from 'react';
import './Visualizer.css';
import BubbleSort from '../SortingAlgorithms/BubbleSort';
import InsertionSort from '../SortingAlgorithms/InsertionSort';
import SelectionSort from '../SortingAlgorithms/SelectionSort';
import QuickSort from '../SortingAlgorithms/QuickSort';
import MergeSort from '../SortingAlgorithms/MergeSort';
const { useState, useEffect } = React;


const Visualizer = () => {
    const [numberOfBars, setNumberOfBars] = useState(50);
    const [randomArray, setRandomArray] = useState([]);
    let timerSpeed = 10;

    useEffect(() => { 
        randomizeArray();
    }, []);

    const valueChange = (evt) => {
        setNumberOfBars(evt.target.value);
    }

    const randomizeArray = () => {
        const arrayDivs = document.getElementsByClassName('random-div');
        for (let x = 0; x < arrayDivs.length; x++) {
            arrayDivs[x].style.backgroundColor = "#189AB4";
        }
        let array = [];
        for (let i = 0; i < numberOfBars; i++) {
            array.push(Math.floor((Math.random() * 100) + 1));
        }
        setRandomArray(array);
    }

    const updateSortedArray = (algorithm) => {
        let array;
        switch (algorithm) {
            case "BubbleSort":
                array = BubbleSort(randomArray);
                break;
            case "InsertionSort":
                array = InsertionSort(randomArray);
                break;
            case "SelectionSort":
                array = SelectionSort(randomArray);
                break;
            case "QuickSort":
                array = QuickSort(randomArray);
                break;
            case "MergeSort":
                array = MergeSort(randomArray);
                break;
            default:
                array = BubbleSort(randomArray);
            break;
        }
        // console.log(array);
        const arrayDivs = document.getElementsByClassName('random-div');
        for (let i = 0; i < array.length; i++) {
            let  [firstEl, secondEl] = array[i];
            const timeout = setTimeout(() => {
                for (let x = 0; x < arrayDivs.length; x++) {
                    arrayDivs[x].style.backgroundColor = "#189AB4";
                }
                arrayDivs[firstEl].style.backgroundColor = 'black';
                arrayDivs[secondEl].style.backgroundColor = 'white';
            }, i * timerSpeed);
            if (firstEl > secondEl) {
                const timeout2 = setTimeout(() => {
                    [arrayDivs[firstEl].style.height, arrayDivs[secondEl].style.height] = [arrayDivs[secondEl].style.height, arrayDivs[firstEl].style.height];
                    arrayDivs[firstEl].style.backgroundColor = 'white';
                    arrayDivs[secondEl].style.backgroundColor = 'black';
                }, i * timerSpeed);
            }
        }
    }

    return (
        <div id='parent-container'>
            <header className='header'>
                <h1>{numberOfBars}</h1>
                <input type= 'range' min= '3' max= '100' value= {numberOfBars} onChange= {(evt) => {valueChange(evt)}}/>
                <button id='arraybtn' onClick={() => {randomizeArray()}}>New Array</button>
                <button onClick={() => {updateSortedArray("BubbleSort")}}>BubbleSort</button>
                <button onClick={() => {updateSortedArray("InsertionSort")}}>InsertionSort</button>
                <button onClick={() => {updateSortedArray("SelectionSort")}}>SelectionSort</button>
                <button onClick={() => {updateSortedArray("QuickSort")}}>QuickSort</button>
                {/* <button onClick={() => {updateSortedArray("MergeSort")}}>MergeSort</button> */}
            </header>
            <div className='array-container'>
                {randomArray.map((value, idx) => (
                <div className='random-div' key={idx} style={{height: `${value}%`}}></div>
            ))}
        </div>
    </div>
    )

}

export default Visualizer;