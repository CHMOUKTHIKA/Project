import React, {Component} from 'react';
import {keyval} from './binarySearch';
import BinarySearch from './binarySearch';

class Result extends Component {
    render() {
        return (
            <div>
                <span className='display-3' style={{fontSize: "10px"}}>
                    {this.props.keyval == -1 ? "The number is not found":"Your number is found at " + this.props.keyval}
                </span> <br />
                <button
                    className='btn btn-warning btn-lg'
                    onClick={this.props.onRestart}
                    style={{backgroundColor:"#0066ff", color:"white"}}
                >
                    Restart
                </button>
            </div>
        );
    }
}

export default Result;
