import React, { Component } from "react";
//import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
//import axios from "axios"

class Carrusel extends Component {
    constructor(){
        super();
        this.state = {
            primerNumeroSuma: "",
            segundoNumeroSuma: "",
            resultadoSuma: "",
            primerNumeroResta: "",
            resultadoResta: ""
        };
    }

    render() {
        return(
            
            <div>
               <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://scontent.fscl9-2.fna.fbcdn.net/v/t1.6435-9/93661623_10158857547794276_7319889883282014208_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=973b4a&_nc_ohc=8npAKSKYK2MAX8HNMTa&_nc_ht=scontent.fscl9-2.fna&oh=6f29c4f051a2d643b36a6f62cba92a6a&oe=60E9AAF0"
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://www.informatica.usach.cl/multimedia/quienessomos.jpg" width="300" height="526"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://media.elmostrador.cl/2019/06/usach-2.jpg" width="300" height="526"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    </Carousel>
            </div>
            
        );

    }
}

export default Carrusel;