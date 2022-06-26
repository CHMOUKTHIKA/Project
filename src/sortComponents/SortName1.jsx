import React, {Component} from 'react';
import Rect from "./rect";
import SimpleSelect from "./simpleSelect";
import onAlgoChanged from "./menu.jsx";
import Rects from "./rects";

class SortName1 extends Component {
    render() {
        let state= this.props.sorts;
        let name="Bubble Sort"
        switch(state){
            case 0:
               name="Bubble Sort";
               break;
            case 1:
               name="Selection Sort";
               break;
            case 2:
                name="Insertion Sort";
                break;
            case 3:
                name="Quick Sort";
                break;  
        }
        return(
            <div class="naming2">
                {name}
            </div>
        );
    }
}

export default SortName1;