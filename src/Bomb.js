import React, {Component} from 'react';

export default class Bomb extends Component {
    
    constructor(secondsLeft) {
        super(secondsLeft)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }
    render() {
        return (
            <div>
                {this.state.secondsLeft === 0 ? <p>Boom!</p> : <p>{this.state.secondsLeft} seconds left before I go boom!</p>}
            </div>
        )
    }
}