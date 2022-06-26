import React, {Component} from 'react';
import SimpleSelect from "./simpleSelect";

class Menu extends Component {
    render() {
        return (
            <nav className="nav alert-dark" >
                <SimpleSelect
                    onAlgoChanged = {this.props.onAlgoChanged}
                    items={this.props.algorithms}
                />
                <SimpleSelect
                    onAlgoChanged={this.props.onMazeChanged}
                    items={this.props.mazes}
                />
                <button
                    className='btn btn-success btn-secondary m-2'
                    onClick={this.props.onCreateMaze}>
                    Create Maze
                </button>
                <button
                    onClick={this.props.onVisualize}
                    className="btn btn-primary  m-2"
                >Visualize</button>
                <button
                    onClick={this.props.onClearPath}
                    className='btn btn-danger btn-secondary m-2'>Clear Path</button>
                <button
                    onClick={this.props.onClearBoard}
                    className='btn btn-lg btn-secondary m-2'>Clear Board</button>
            </nav>
        );
    }
}

export default Menu;