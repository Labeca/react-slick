'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

var getDotCount = function (spec) {
  var dots;
  dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
  return dots;
};

const animatedScrool = (nodeToAnimate, scrollX, direction) => {
  const currentScroll = nodeToAnimate.scrollLeft
  let qtdToScroll = (currentScroll - scrollX) / 13
  qtdToScroll = qtdToScroll < 0 ? qtdToScroll * -1 : qtdToScroll
  const animate = setInterval(() => {
    if(direction) {
      nodeToAnimate.scrollLeft += qtdToScroll
      if(nodeToAnimate.scrollLeft >= scrollX){
        clearTimeout(animate)
      }
    } else {
      nodeToAnimate.scrollLeft -= qtdToScroll
      if(nodeToAnimate.scrollLeft <= scrollX){
        clearTimeout(animate)
      }
    }
  }, 13)
}

export class Dots extends React.Component {
  clickHandler(options, e) {
    // In Autoplay the focus stays on clicked button even after transition
    // to next slide. That only goes away by click somewhere outside
    e.preventDefault();
    this.props.clickHandler(options);
  }
  componentDidUpdate() {
    const thumbActive = ReactDOM.findDOMNode(this).getElementsByClassName('slick-active')[0]
    if((thumbActive.offsetLeft + thumbActive.clientWidth) > (thumbActive.offsetParent.clientWidth + thumbActive.parentElement.scrollLeft)){
      animatedScrool(ReactDOM.findDOMNode(this), (thumbActive.offsetLeft + thumbActive.clientWidth) - thumbActive.offsetParent.clientWidth, true)
    } else if (thumbActive.offsetLeft < thumbActive.parentElement.scrollLeft) {
      animatedScrool(ReactDOM.findDOMNode(this), thumbActive.offsetLeft, false)
    }
  }
  render() {

    var dotCount = getDotCount({
      slideCount: this.props.slideCount,
      slidesToScroll: this.props.slidesToScroll
    });

    // console.log(dotCount)
    // if(dotCount > 7) {
    //   return (<span></span>)
    // }
    // Apply join & split to Array to pre-fill it for IE8
    //
    // Credit: http://stackoverflow.com/a/13735425/1849458
  
    var dots = Array.apply(null, Array(dotCount + 1).join('0').split('')).map((x, i) => {

      var leftBound = (i * this.props.slidesToScroll);
      var rightBound = (i * this.props.slidesToScroll) + (this.props.slidesToScroll - 1);
      var className = classnames({
        'slick-active': (this.props.currentSlide >= leftBound) && (this.props.currentSlide <= rightBound)
      });

      var dotOptions = {
        message: 'dots',
        index: i,
        slidesToScroll: this.props.slidesToScroll,
        currentSlide: this.props.currentSlide
      };

      var onClick = this.clickHandler.bind(this, dotOptions);
      if(this.props.customPaging.type === 'span') { return null}
      return (
        <li key={i} className={className}>
          {React.cloneElement(this.props.customPaging(i), {onClick})}
        </li>
      );
    });
    return (
      <ul className={this.props.dotsClass} style={{display: 'block'}}>
        {dots}
      </ul>
    );
  }
}
