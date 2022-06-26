import React, {Component} from 'react';
import Rect from "./rect";
import SimpleSelect from "./simpleSelect";
import onAlgoChanged from "./menu.jsx";
import Rects from "./rects";

class SortName extends Component {
    render() {
        let state= this.props.sorts;
        let name="Merge Sort"
        switch(state){
            case 0:
               name="Merge Sort";
               break;
            case 1:
               name="Heap Sort";
               break;
            case 2:
                name="Quick Sort";
                break;
        }
        return(
            <div class="naming">
                {name}
            </div>
        );
    }
}

export default SortName;