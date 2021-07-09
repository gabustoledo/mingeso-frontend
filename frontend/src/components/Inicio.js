import React, { Component } from "react";
import { Image } from 'react-bootstrap';
import Carrusel from './Carrusel.js'
//import axios from "axios"

class Inicio extends Component {
    constructor(){
        super();
        this.state = {
        };
    }

    render() {
        return(
            
            <div>
               
               <title center> Portal de diplomados </title>

                <Image center src="https://www.informatica.usach.cl/multimedia/DIINF-Iogo-300x150.png" width="300" height="150" fluid />

                <p>  
                    Bienvenido al portal de diplomados DIINF, aquí podras encontrar todos los diplomados que tiene el departamento de informatica
                    a su disposición.
                </p>
            <Carrusel />
            <container>
                </container>
            </div>
            
        );

    }
}

export default Inicio;