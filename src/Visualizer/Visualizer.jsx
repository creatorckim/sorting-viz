import React from 'react';
import './Visualizer.css';
import BubbleSort from '../SortingAlgorithms/BubbleSort';
const { useState, useEffect } = React;


const Visualizer = () => {
    const [numberOfBars, setNumberOfBars] = useState(50);
    const [randomArray, setRandomArray] = useState([]);
    const [turnsArray, setTurnsArray] = useState([]);

    const valueChange = (evt) => {
        setNumberOfBars(evt.target.value);
    }

    const randomizeArray = () => {
        let array = [];
        for (let i = 0; i < numberOfBars; i++) {
            array.push(Math.floor((Math.random() * 100) + 1));
        }
        setRandomArray(array);
        setTurnsArray([]);
    }

    const updateSortedArray = () => {
        let array = BubbleSort(randomArray);
        for (let i = 0; i < array.length; i++) {
            const arrayDivs = document.getElementsByClassName('random-div');
            let  [firstEl, secondEl] = array[i];
            arrayDivs[firstEl].style.backgroundColor = 'black';
            arrayDivs[secondEl].style.backgroundColor = 'black';
            if (firstEl > secondEl) {
                const timeout = setTimeout(() => {
                    for (let x = 0; x < arrayDivs.length; x++) {
                        arrayDivs[x].style.backgroundColor = "#189AB4";
                    }
                    // arrayDivs[firstEl].style.backgroundColor = 'white';
                    // arrayDivs[secondEl].style.backgroundColor = 'black';
                    let temp = arrayDivs[firstEl].style.height;
                    arrayDivs[firstEl].style.height = arrayDivs[secondEl].style.height; 
                    arrayDivs[secondEl].style.height = temp;
                    arrayDivs[firstEl].style.backgroundColor = 'white';
                    // arrayDivs[secondEl].style.backgroundColor = 'black';
                    // console.log('still?');
                }, i * 1000);
            } else {
                // const timeouut = setTimeout(() => {
                //     for (let x = 0; x < arrayDivs.length; x++) {
                //         arrayDivs[x].style.backgroundColor = "#189AB4";
                //     }
                //     arrayDivs[firstEl].style.backgroundColor = 'black';
                //     arrayDivs[secondEl].style.backgroundColor = 'white';
                // }, 1000);
                
            }
        }
        //resets turnsArray so when someone accidently double clicks bubblesort btn, it doesn't crash
        setTurnsArray([]);
    }

    useEffect(() => { 
        randomizeArray();
    }, []);

    return (
        <div id='parent-container'>
            <header className='header'>
                <h1>{numberOfBars}</h1>
                <input type= 'range' min= '3' max= '100' value= {numberOfBars} onChange= {(evt) => {valueChange(evt)}}/>
                <button onClick={() => {randomizeArray()}}>New Array</button>
                <button onClick={() => {updateSortedArray()}}>BubbleSort</button>
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





// import React from 'react';
// import './Visualizer.css';
// import BubbleSort from '../SortingAlgorithms/BubbleSort';
// const { useState, useEffect } = React;


// const Visualizer = () => {
//     const [numberOfBars, setNumberOfBars] = useState(50);
//     const [randomArray, setRandomArray] = useState([]);
//     const [turnsArray, setTurnsArray] = useState([]);
//     const [count, setCount] = useState(0);
//     const [isClicked, setIsClicked] = useState(false);

//     const valueChange = (evt) => {
//         setNumberOfBars(evt.target.value);
//     }

//     const randomizeArray = () => {
//         let array = [];
//         for (let i = 0; i < numberOfBars; i++) {
//             array.push(Math.floor((Math.random() * 100) + 1));
//         }
//         setRandomArray(array);
//         setTurnsArray([]);
//         // setCount(0);
//     }

//     const updateSortedArray = () => {
//         let array = BubbleSort(randomArray);
//         setTurnsArray(Object.values(array));
//         setCount(0);
//         // isClicked.current = true;
//         // setRandomArray(Object.values(array));
//         // let tempArray = randomArray;
//         // for (let i = 0; i < turnsArray.length; i++) {
//         //     let  [firstEl, secondEl] = turnsArray[i];
//         //     let firstHeight = firstEl.style.height;
//         //     let secoundHeight = secondEl.style.height;
//         //     let temp = firstHeight;
//         //     firstHeight = secoundHeight;
//         //     secoundHeight = temp;
        
//         //     // let temp = tempArray[firstEl];
//         //     // tempArray[firstEl] = tempArray[secondEl];
//         //     // tempArray[secondEl] = temp;
//         //     // setRandomArray(Object.values[tempArray]);
//         // }
//         //resets turnsArray so when someone accidently double clicks bubblesort btn, it doesn't crash
//         setTurnsArray([]);
//     }

//     useEffect(() => { 
//         randomizeArray();
//     }, []);

//     // useEffect(() => {
//     //     console.log("why");
//     //     const timeout = setTimeout(() => {
//     //         let  [firstEl, secondEl] = turnsArray[count];
//     //         let firstHeight = firstEl.style.height;
//     //         let secoundHeight = secondEl.style.height;
//     //         let temp = firstHeight;
//     //         firstHeight = secoundHeight;
//     //         secoundHeight = temp;
//     //         if (count < turnsArray.length) {
//     //             setCount(count => count + 1);
//     //         }
//     //         else {
//     //             setCount(0);
//     //         }
//     //     }, 1000);
//     //     return () => clearTimeout(timeout);
//     // }, [count]);

//     useEffect(() => {
//         const timeout = setTimeout(() => {
//             // let tempArray = randomArray;
//             if (count <= turnsArray.length) {   
//             }
//             for (let i = 0; i < turnsArray.length; i++) {
//                 let  [firstEl, secondEl] = turnsArray[i];
//                 let firstHeight = firstEl.style.height;
//                 let secoundHeight = secondEl.style.height;
//                 let temp = firstHeight;
//                 firstHeight = secoundHeight;
//                 secoundHeight = temp;
//                 setCount(count => count + 1);
//             }
//         }, 1000);
//         console.log("why");
//         // turnsArray.shift();
//         // setTurnsArray(Object.values(turnsArray));
//         return () => clearTimeout(timeout);
//     }, [()=>updateSortedArray()]);

//     return (
//         <div id='parent-container'>
//             <header className='header'>
//                 <h1>{count}</h1>
//                 <h1>{numberOfBars}</h1>
//                 <input type= 'range' min= '3' max= '100' value= {numberOfBars} onChange= {(evt) => {valueChange(evt)}}/>
//                 <button onClick={() => {randomizeArray()}}>New Array</button>
//                 <button onClick={() => {updateSortedArray()}}>BubbleSort</button>
//             </header>
//             <div className='array-container'>
//                 {randomArray.map((value, idx) => (
//                 <div className='random-div' key={idx} style={{height: `${value}%`}}></div>
//             ))}
//         </div>
//     </div>
//     )

// }

// export default Visualizer;