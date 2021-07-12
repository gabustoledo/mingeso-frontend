import React, { Component } from "react";
import {
  Card,
  Button,
  Jumbotron,
  Container,
  Image,
  Col,
  Row,
} from "react-bootstrap";
//import './css/general.css';

class Inicio extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Container>
          <Jumbotron>
            <h1> Diplomados del Departamento de Ingenieria Informática</h1>
            <p> Educación continua </p>
          </Jumbotron>
        </Container>

        <Container fluid>
          <Row>
            <Col sm={10}>
              <Card>
                <Card.Body>
                  <Card.Title>
                    Diplomado en Ciencia de Datos Aplicada
                  </Card.Title>
                  <Card.Text>Analisis de Datos</Card.Text>
                  <Button href="/DiplomadoCienciaDatos" variant="primary">
                    Mas información
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={2}>
              <Image
                src="https://www.claseejecutiva.uc.cl/wp-content/uploads/2020/02/Diplomado-en-Ciencia-de-datos-para-la-gestion-Clase-Ejecutiva-UC.jpg"
                width="150"
                height="150"
                roundedCircle
              />
            </Col>
          </Row>
        </Container>

        <br />

        <Container fluid>
          <Row>
            <Col sm={10}>
              <Card>
                <Card.Body>
                  <Card.Title>Diplomado en Ciberseguridad</Card.Title>
                  <Card.Text>Ciberseguridad y Hacking ético</Card.Text>
                  <Button href="/DiplomadoCiberseguridad" variant="primary">
                    Mas información
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={2}>
              <Image
                src="https://latam.kaspersky.com/content/es-mx/images/repository/isc/2020/cyber-security-article.jpg"
                width="150"
                height="150"
                roundedCircle
              />
            </Col>
          </Row>
        </Container>

        <br />

        <Container fluid>
          <Row>
            <Col sm={10}>
              <Card>
                <Card.Body>
                  <Card.Title>
                    Diplomado en Riesgo Operacional y Continuidad del Negocio en
                    Proceso y Tics
                  </Card.Title>
                  <Card.Text>Gestion y Procesos Críticos</Card.Text>
                  <Button href="/DiplomadoRiesgo" variant="primary">
                    Mas información
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={2}>
              <Image
                src="https://www.piranirisk.com/hubfs/0000000000%20AAAA%20blog/Gesti%C3%B3n%20de%20riesgos/h_gestion_de_riesgos_6.jpg"
                width="150"
                height="150"
                roundedCircle
              />
            </Col>
          </Row>
        </Container>

        <br />

        <Container fluid>
          <Row>
            <Col sm={10}>
              <Card>
                <Card.Body>
                  <Card.Title>
                    Diplomado en Control, Seguridad y Auditoria Computacional
                  </Card.Title>
                  <Card.Text>Auditoría y Seguridad</Card.Text>
                  <Button href="/DiplomadoControl" variant="primary">
                    Mas información
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={2}>
              <Image
                src="https://www.unir.net/wp-content/uploads/2020/04/sety.jpg"
                width="150"
                height="150"
                roundedCircle
              />
            </Col>
          </Row>
        </Container>

        <br />

        <Container fluid>
          <Row>
            <Col sm={10}>
              <Card>
                <Card.Body>
                  <Card.Title>Diplomado en Peritaje Informático</Card.Title>
                  <Card.Text>
                    Exigencias legislativas, judiciales y policiales.
                  </Card.Text>
                  <Button href="/DiplomadoPeritaje" variant="primary">
                    Mas información
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={2}>
              <Image
                src="https://gabinetepericialgpi.com/wp-content/uploads/2019/12/qef.jpg"
                width="150"
                height="150"
                roundedCircle
              />
            </Col>
          </Row>
        </Container>

        <br />
      </div>
    );
  }
}

export default Inicio;
