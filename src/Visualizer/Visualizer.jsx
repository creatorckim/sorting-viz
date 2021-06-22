import React from 'react';
import './Visualizer.css';
import BubbleSort from '../SortingAlgorithms/BubbleSort';
import InsertionSort from '../SortingAlgorithms/InsertionSort';
const { useState, useEffect } = React;


const Visualizer = () => {
    const [numberOfBars, setNumberOfBars] = useState(50);
    const [randomArray, setRandomArray] = useState([]);
    const [running, setRunning] = useState(false);
    let timerSpeed = 10;

    useEffect(() => { 
        randomizeArray();
    }, []);

    const valueChange = (evt) => {
        setNumberOfBars(evt.target.value);
    }

    const randomizeArray = () => {
        let array = [];
        for (let i = 0; i < numberOfBars; i++) {
            array.push(Math.floor((Math.random() * 100) + 1));
        }
        setRandomArray(array);
    }

    const updateSortedArray = () => {
        let array = InsertionSort(randomArray);
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
                    let temp = arrayDivs[firstEl].style.height;
                    arrayDivs[firstEl].style.height = arrayDivs[secondEl].style.height; 
                    arrayDivs[secondEl].style.height = temp;
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
                <button onClick={() => {updateSortedArray()}}>BubbleSort</button>
                <button onClick={() => {updateSortedArray()}}>InsertionSort</button>
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