import React, { Component } from "react";
//import { Navbar,Nav, Card } from 'react-bootstrap';
//import axios from "axios"

class Footer extends Component {

    render() {
        return(
            
            <div>

                <footer class="hidden-print">
                            <div class="container">
                                <div class="row inner-footer open-sans">
                                    <div class="col-md-10">
                                        <q>Universidad de Santiago de Chile. Avenida Ecuador #3659. Estación Central, Santiago de Chile.</q>
                                        <br></br>
                                        <q>+56 2 2718 0900</q>
                                    </div>
                                </div>
                            </div>
                </footer>

            </div>

        );
    }
}

export default Footer;