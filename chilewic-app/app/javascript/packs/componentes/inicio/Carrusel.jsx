import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';


export default class Carrusel extends React.Component {
  constructor(props, context) {
  super(props, context);

  this.handleSelect = this.handleSelect.bind(this);

  this.state = {
    index: 0,
    direction: null,
  };
}

handleSelect(selectedIndex, e) {
  this.setState({
    index: selectedIndex,
    direction: e.direction,
  });
}



  render() {
    const { index, direction } = this.state;



    return (
      <Carousel activeIndex={index} direction={direction} onSelect={this.handleSelect}>
        <Carousel.Item>
          <img   className="w-auto p-3" src={require('./asserts/2.jpg')} alt="900x500" />
            <Carousel.Caption>
              <h3> first label </h3>
              <p>nulla </p>
            </Carousel.Caption>
          </Carousel.Item>
        <Carousel.Item>
          <img  className="w-auto p-3" src={require('./asserts/3.jpg')} alt="900x500" />
            <Carousel.Caption>
              <h3> first label </h3>
              <p>nulla </p>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


    );
  }
}
