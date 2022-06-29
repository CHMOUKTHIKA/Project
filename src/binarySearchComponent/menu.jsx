import React, {Component} from 'react';
// import DiscreteSlider from "./slider";
// import SimpleSelect from "./simpleSelect";
// import CustomizedSlider from "./airBnbSlider";
// import RangeSlider from "./doubleSlider";
// import SwitchLabels from "./formControlLabel";


class Menu extends Component {
    render() {
        return (
            <nav className="nav alert-dark">
                <button
                    className='btn btn-primary m-2'
                    onClick={this.props.onRandomize}
                    disabled={this.props.disable}
                    style={this.isClickable()}
                >
                   Generate New Array
                </button>

                {/* <RangeSlider
                    disable={this.props.disable}
                /> */}
                {/* <DiscreteSlider
                    default={20}
                    min={10}
                    max={100}
                    step={10}
                    title="Numbers"
                    onCountChange={this.props.onCountChange}
                    disable={this.props.disable}
                /> */}
                {/* <DiscreteSlider
                    default={50}
                    min={10}
                    max={100}
                    step={1}
                    title="Speed"
                    onCountChange={this.props.onSpeedChange}
                    disable={false}
                /> */}
                {/* <SimpleSelect
                    pos={0}
                    onAlgoChanged={this.props.onAlgoChanged}
                /> */}
                {/* <button
                    className='btn btn-primary btn-lg visual'
                    onClick={this.props.startGame}
                    disabled={this.props.disable}
                    style={this.isClickable()}
                >
                    Search
                </button> */}

            </nav>
        );
    }
    isClickable = () =>{
        if( this.props.disable ){
            return {cursor: "not-allowed"};
        } else{
            return {};
        }
    }
}


export default Menu;