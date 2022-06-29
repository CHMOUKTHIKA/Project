import React, {Component} from 'react';
import EntryPoint from "./entryPoint";
import Search from "./search";
import Navbar from "./navbar";
import Menu from "./menu";
import Rect from "./rect";
import Rects from "./rects";
import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import "./style.css";
import Result from './result';

class BinarySearch extends Component {
    state = {
        count: 20,
        rects: [],
        speed: 50,
        isRunning: false,
        algo: 0,
        keyval:0,
        phase:0
    }

    constructor() {
        super();
    }

    componentDidMount() {
        var rects = getInitialRects(this.state.count);
        for(let i=0;i<rects.length;i++)
        {
            for(let j=0;j<rects.length-i-1;j++)
            {
                if(rects[j].width>rects[j+1].width)
                {
                    let temp=rects[j].width;
                    rects[j].width=rects[j+1].width;
                    rects[j+1].width=temp;
                }
            }
        }
        this.setState({rects});
        // console.log(rects);
        /* var rects2 = rects.slice();
       
         rects = mergeSort(rects);
         console.log(rects);*/

    }
    render() {
        return (
            <div>
                <Navbar/>
                <Menu
                    disable={this.state.isRunning}
                    onSearch={this.handleSearch}
                    onRandomize={this.handleRandomize}
                    // onRefresh={this.handleRefresh}
                    // onCountChange={this.handleCountChange}
                    // onAlgoChanged={this.handleAlgoChanged}
                    // onSpeedChange={this.handleSpeedChanged}
                />
                <div className=' justify-content-center'>
                    <Rects
                        rects={this.state.rects}
                    />

                </div>
                {/* <div>
                    {this.state.keyval}
                </div> */}
                <br />
                <br />
                <br />
            <center>
                {!this.state.isRunning &&
                <EntryPoint
                    startGame={this.handleStartGame}
                    upper={this.state.upper}
                    setUpper={this.handleSetUpper}
                /> }
                {this.state.isRunning &&
                <Search
                    // yesButton={this.handleYes}
                    // noButton={this.handleNo}
                    upper={this.state.upper}
                    // lower={this.state.lower}
                    max={this.state.max}
                    onRestart={this.handleRestart}
                    keyval={this.state.keyval}
                    phase={this.state.phase}
                />
                }
            </center>
            {/* <div className='binsearch-new'>
                Value is found at {this.state.keyval}
            </div> */}
            </div>
        );
    }

    handleRandomize = () => {
        const rect = getInitialRects(this.state.count);

        this.setState({rects: rect});
    }
    handleRefresh = () => {
        const rects = this.state.rects;
        for (let i = 0; i < rects.length; i++) {
            const rect = {...rects[i], isMid: false, isFound: false, isNotFound: false}
            rects[i] = rect;

            // alert(rects[i]);
        }
        for(let i=0;i<rects.length;i++)
        {
            for(let j=0;j<rects.length-i-1;j++)
            {
                if(rects[j].width>rects[j+1].width)
                {
                    let temp=rects[j].width;
                    rects[j].width=rects[j+1].width;
                    rects[j+1].width=temp;
                }
            }
        }
        this.setState({rects});
    }
    handleStartGame = () =>{
        this.setState({isRunning:true});
        let end=this.state.rects.length-1;
        let pairs=[];
        // let key=search(this.state.rects,this.state.upper,0,end);
        let key=search1(this.state.rects,this.state.upper,0,end,pairs);
        // console.log(key);
      
         this.setState({keyval:key,isRunning:true});
         this.handleFirst(pairs);
         this.setState({phase:1});
    }
    handleRestart = () =>{
        this.setState({isRunning:false,upper:0,lower:0});

        this.handleRandomize();
        // this.handleRefresh();

    }
    
    handleSetUpper = (up) =>{
        let val = parseInt(up);
        if( val<=0 ){
            val = 100;
        }
        this.setState({upper:val,max:val});
    }

    handleFirst = async(pairs) =>{
        const rect = this.state.rects;
        for(let i=0;i<pairs.length;i++)
        {
            if(pairs[i].y==0){
            rect[pairs[i].x] = {...rect[pairs[i].x], isMid: true, isFound: false, isNotFound: false}
            }
            if(pairs[i].y==2){
                rect[pairs[i].x] = {...rect[pairs[i].x], isMid: false, isFound: true, isNotFound: false}
                }
                else{
                    rect[pairs[i].x] = {...rect[pairs[i].x], isMid: false, isFound: false, isNotFound: true}
                    }
            this.setState({rects:rect});
            await sleep(this.state.speed);
        }
    }
}
    // function sleep(ms) {
    //     return new Promise(resolve => setTimeout(resolve, ms));
    // }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    const getInitialRects = (tot) => {
        const rects = [];
        for (let i = 0; i < tot; i++) {
            rects.push(getRect());
        }

        for(let i=0;i<rects.length;i++)
        {
            for(let j=0;j<rects.length-i-1;j++)
            {
                if(rects[j].width>rects[j+1].width)
                {
                    let temp=rects[j].width;
                    rects[j].width=rects[j+1].width;
                    rects[j+1].width=temp;
                }
            }
        }
        // this.setState({rects});
        return rects;
    }
    const getRect = () => {
        return {
            width: Math.floor(Math.random() * 200) + 50,
            isSorted: false,
            isSorting: false,
            isLeft: false,
            isRight: false
        }
    }
    

    const search1 = (rects,x,start,end,pairs) =>{
        if (start > end) return -1;
        // const rect=rects;
        let mid=Math.floor((start + end)/2);
        // rect[mid] = {...rects[mid], isMid: true, isFound: false, isNotFound: false}
        // this.setState({rects:rect});
        // sleep(this.state.speed);
        pairs.push(
            {
                x:mid,y:0
            }
        );
        if (rects[mid].width===x) {
            // rects[mid].style.backgroundColor = "green";
            // rect[mid] = {...rects[mid], isMid: false, isFound: true, isNotFound: false}
            pairs.push(
                {
                    x:mid,y:2
                }
            );
            return mid;
        } 
        if(rects[mid].width > x)
        {
            // rect[mid] = {...rects[mid], isMid: false, isFound: false, isNotFound: true}
            // rects[mid].style.backgroundColor = "red";
            pairs.push(
                {
                    x:mid,y:1
                }
            );
            return search1(rects, x, start, mid-1,pairs);
        }
        else{
            // rect[mid] = {...rects[mid], isMid: false, isFound: false, isNotFound: true}
            // rects[mid].style.backgroundColor = "red";
            pairs.push(
                {
                    x:mid,y:1
                }
            );
            return search1(rects, x, mid+1, end,pairs);
        }

        
        // for(let i=0;i<rects.length;i++)
        // {
        //     if(rects[i].width===key1)
        //         return i;
        // }
        // return -1;
        
       

    }
export default BinarySearch;