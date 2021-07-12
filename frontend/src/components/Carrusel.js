import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

class Carrusel extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.usach.cl/sites/default/files/Nuestra-Universidad-Acreditacio%CC%81n-889_0.jpg"
              width="300"
              height="526"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.informatica.usach.cl/multimedia/quienessomos.jpg"
              width="300"
              height="526"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.elmostrador.cl/2019/06/usach-2.jpg"
              width="300"
              height="526"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Carrusel;
