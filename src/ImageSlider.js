// your ImageSlider code here!
import React, { Component } from 'react'

export default class ImageSlider extends React.Component {

  constructor () {
    super()
    this.state = {
      currentSlideIndex: 0
    }
  }
  render(){
    const currentSlide = this.state.currentSlideIndex;

    return(
      <p>I am on slide {currentSlide}</p>
    )
  }

}
