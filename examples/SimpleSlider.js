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
    const customPaging = i => (
      <span style={{height: '100px', width: '100px', backgroundColor: 'red', display: 'inline-block'}}>{i}</span>
    )
    const settings = {
      dots: true,
      accessibility: true,
      useCSS: true,
      className: "carousel",
      dotsClass: "thumbs",
      draggable: false,
      slidesToScroll: 1,
      slidesToShow: 1,
      speed:500,
      maxDots: 5,
      counterStyle: 'ze',
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
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
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
