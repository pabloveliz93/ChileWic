import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'

export default class Carrusel extends React.Component {
  render() {
  

    return (
      <Carousel>
                <div>
                    <img src="asserts/1.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="asserts/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="asserts/3.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    );
  }
}
