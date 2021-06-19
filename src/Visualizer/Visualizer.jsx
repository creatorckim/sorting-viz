import { Component }  from 'react';
import './Visualizer.css';

export default class Visualizer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfBars: 50,
            randomArray: []
        };
    }

    randomizeArray = () => {
        let array = [];
        for (let i = 0; i < this.state.numberOfBars; i++) {
            array.push(Math.floor((Math.random() * 100) + 1));
        }
        this.setState({
            randomArray: array
        });
    }

    valueChange = (evt) => {
        this.setState({
            numberOfBars: evt.target.value
        })

    }

    render() {
        const {randomArray} = this.state;

        return (
            <div id='parent-container'>
                <h1>{this.state.numberOfBars}</h1>
                <input type= 'range' min= '3' max= '100' value= {this.state.numberOfBars} onChange= {this.valueChange}/>
                <button onClick={this.randomizeArray}>Get Random Array</button>
                <div className='array-container'>
                    {randomArray.map((value, idx) => (
                        <div className='random-div' key={idx} style={{height: `${value}%`}}></div>
                    ))}
                </div>
            </div>
            
        )
    }
}