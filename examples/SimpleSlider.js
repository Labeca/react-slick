import React, { Component } from 'react'
import Slider from '../src/slider'

const Arrow = (props) => {
  const ico = props.direction ? '<' : '>'
  return (
    <button onClick={props.onClick}>
      {ico}
    </button>
  )
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      accessibility: true,
      useCSS: true,
      className: "carousel",
      dotsClass: "thumbs",
      customPaging: i => (
          <div><h3>{1 + i}</h3></div>
      ),
      draggable: false,
      slidesToScroll: 1,
      slidesToShow: 1,
      speed:500,
      showCounter: true,
    };
    return (
      <div style={{width: '500px', margin: 'auto'}}>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
        </Slider>
      </div>
    );
  }
}
