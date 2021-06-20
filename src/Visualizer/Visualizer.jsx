import React from 'react';
import './Visualizer.css';
import BubbleSort from '../SortingAlgorithms/BubbleSort';
const { useState, useEffect } = React;


const Visualizer = () => {
    const [numberOfBars, setNumberOfBars] = useState(50);
    const [randomArray, setRandomArray] = useState([]);

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
        let array = BubbleSort(randomArray);
        setRandomArray(Object.values(array));
    }

    return (
        <div id='parent-container'>
            <header className='header'>
                <h1>{numberOfBars}</h1>
                <input type= 'range' min= '3' max= '100' value= {numberOfBars} onChange= {(evt) => {valueChange(evt)}}/>
                <button onClick={() => {randomizeArray()}}>Randomize</button>
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





// import { Component }  from 'react';
// import './Visualizer.css';
// import bubbleSort from '../SortingAlgorithms/BubbleSort';

// export default class Visualizer extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             numberOfBars: 50,
//             randomArray: [],
//             turnsArray: [],
//             interval: false,
//             count: 0
//         };
//     }

//     componentDidMount() {
//         this.randomizeArray();
//     }

//     randomizeArray = () => {
//         let array = [];
//         for (let i = 0; i < this.state.numberOfBars; i++) {
//             array.push(Math.floor((Math.random() * 100) + 1));
//         }
//         this.setState({
//             randomArray: array,
//             count: 0
//         });

//     }

//     valueChange = (evt) => {
//         this.setState({
//             numberOfBars: evt.target.value
//         })
//     }

//     updateState = (array) => {
//         //this updates randomArray as well
//         this.setState({
//             turnsArray: array
//         })

//         //console.log(array);

//         // this.setState({
//         //     interval: true
//         // })

//         for (let i = 0; i < array.length; i++) {
//             let divArray = document.getElementsByClassName('random-div');
//             // let firstBarHeight = divArray[array[i][0]].style.height;
//             // let secondBarHeight = divArray[array[i][1]].style.height;
//             // let [firstIdx, secondIdx] = array[i];
//             // if (firstIdx > secondIdx) {
//             //     let tempHeight = divArray[firstIdx].style.height;
//             //     divArray[firstIdx].style.height = divArray[secondIdx].style.height;
//             //     divArray[secondIdx].style.height = tempHeight;

//             // }
            
//             // setTimeout(() => {
//             //     let [firstIdx, secondIdx] = array[i];
//             //     if (firstIdx > secondIdx) {
//             //         // firstBar.backgroundColor = 'black';
//             //         // secondBar.backgroundColor = 'white';
//             //         // let tempHeight = firstBarHeight;
//             //         // let firstBarHeight = secondBarHeight;
//             //         // let secondBarHeight = tempHeight;

//             //         let tempHeight = divArray[firstIdx].style.height;
//             //         divArray[firstIdx].style.height = divArray[secondIdx].style.height;
//             //         divArray[secondIdx].style.height = tempHeight;

//             //     }
                
//             // }, 2000);

//         }

//     }

//     render() {
//         const {randomArray, numberOfBars} = this.state;

//         return (
//             <div id='parent-container'>
//                 <header className='header'>
//                     <h1>{numberOfBars}</h1>
//                     <input type= 'range' min= '3' max= '100' value= {numberOfBars} onChange= {this.valueChange}/>
//                     <button onClick={this.randomizeArray}>Randomize</button>
//                     <button onClick={() => {this.updateState(bubbleSort(randomArray))}}>BubbleSort</button>
//                 </header>
//                 <div className='array-container'>
//                     {randomArray.map((value, idx) => (
//                         <div className='random-div' key={idx} style={{height: `${value}%`}}></div>
//                     ))}
//                 </div>
//             </div>
            
//         )
//     }
// }