import React, { Component } from "react";
import { Row, Container, Jumbotron } from "react-bootstrap";

class PostulacionEnviada extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
        
        <div>
            
            <Container fluid>
                
                <br/>

                <Jumbotron>

                <h1> Postulacion Enviada </h1>
                <br/>
                <Row> Su postulacion a sido enviada, </Row> 
                <Row> En breve nos pondremos en contacto, Muchas gracias.</Row> 

                </Jumbotron>

            </Container>

        </div>

    );
  }
}

export default PostulacionEnviada;