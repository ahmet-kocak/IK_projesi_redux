import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import Insankaynaklari1 from "../../image/insankaynaklari1.jpg";
import Insankaynaklari2 from "../../image/insankaynaklari2.jpg";
import Insankaynaklari3 from "../../image/insankaynaklari3.png";

export default class Slider extends Component {
  render() {
  
    return (
      <div>
        <Carousel>
  <Carousel.Item>
  <img
          className="d-block w-100"
          src={Insankaynaklari1}
          alt="Third slide"
        />
    <Carousel.Caption>
      
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
          className="d-block w-100"
          src={Insankaynaklari2}
          alt="Third slide"
        />
    <Carousel.Caption>
  
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
          className="d-block w-100"
          src={Insankaynaklari3}
          alt="Third slide"
        />

    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>
    );
  }
}
