// your Bomb code here!
import React, { Component } from 'react';

class Bomb extends Component {
    constructor(props){
        super(props)
            this.state = {
                secondsLeft: this.props.initialCount
            }
    }

    render() {
        console.log(this.props.initialCount);
        if(this.state.secondsLeft === 120){
            return (
                <div>
                    {this.state.secondsLeft} seconds left before I go boom!
                </div>
            );
        }
        
        else{
            console.log(this.state.secondsLeft);
            return (
                <div>
                   Boom! 
                </div>
            );
        }
 
    }
}

export default Bomb