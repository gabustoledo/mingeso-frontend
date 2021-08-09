import React, { Component } from "react";
import { Row, Button, Container } from "react-bootstrap";
//import axios from "axios"

class MainSecretaria extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <br/>

        <Container fluid>
            
            <Row> <h1> Bienvenid@ al portal de Secretari@ </h1> </Row>
        
        </Container>

        <br/>
				<br/>

        <Container fluid>

            <Row> <Button variant="primary" size="lg" href = '/Postulaciones' block> Postulaciones de diplomado </Button> </Row>
						<br/>
            <Row> <Button variant="primary" size="lg" href = '/Rechazadas' block> Portulaciones rechazadas por el comite </Button> </Row>
						<br/>
            <Row> <Button variant="primary" size="lg" href = '/Aceptadas' block> Postulacion aceptadas </Button> </Row>
        
        </Container>
        

      </div>
    );
  }
}

export default MainSecretaria;
