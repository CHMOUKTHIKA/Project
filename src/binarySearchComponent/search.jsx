import React, {Component} from 'react';
import Guess from "./guess";
import Result from "./result";

class Search extends Component {
    render() {
        return (
            <div>
                {this.props.upper !== this.props.lower &&
                <Guess
                    yesButton={this.props.yesButton}
                    noButton={this.props.noButton}
                    upper={this.props.upper}
                    lower={this.props.lower}
                    max={this.props.max}
                />
                }
                {this.props.phase === 1 &&
                   <Result
                       res={this.props.upper}
                       onRestart={this.props.onRestart}
                       keyval={this.props.keyval}
                   />
                }
            </div>
        );
    }

}

export default Search;