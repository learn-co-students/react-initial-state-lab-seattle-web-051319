// your Bomb code here!
import React, { Component } from 'react'

export default class Bomb extends React.Component {

  constructor(props){

    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }

  }

  render(){
    const secondsLeft = this.state.secondsLeft;

    return(
      <div>
      {secondsLeft === 0 ? <p>Boom!</p> :  <p>{secondsLeft} seconds left before I go boom!</p>}
      </div>


    )
  }

}
