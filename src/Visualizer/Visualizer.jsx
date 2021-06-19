import { Component }  from 'react';
import './Visualizer.css';

export default class Visualizer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfBars: 50
        };
    }

    valueChange = (evt) => {
        this.setState({
            numberOfBars: evt.target.value
        })

    }


    render() {
        return (
            <div>
                <h1>{this.state.numberOfBars}</h1>
                <input type= 'range' min= '3' max= '100' value= {this.state.numberOfBars} onChange= {this.valueChange}/>
            </div>
            
        )
    }
}