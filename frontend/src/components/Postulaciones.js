import React, { Component } from "react";
import {
  Button,
  Card,
  Row,
  Col,
  Container,
  Modal,
  Accordion,
} from "react-bootstrap";
import axios from "axios";

//FALTA TERMINAR: función delete.
//const borrarPostulacion = (id_postulante) => {
//  axios
//      .delete("/FormularioDelete/{id_postulante}")
//      .catch((err) => console.log(err));
//}

class Postulaciones extends Component {
  constructor() {
    super();
    this.state = { postulaciones: [], diplomados: [], show: false };
  }

  //componentDidMount() { //<----------------------------
  //  this.state.getPostulaciones();
  //}

  getPostulaciones = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:1818/Formulario")
      .then((response) => {
        this.setState({ postulaciones: response.data });
        console.log(this.state.postulaciones);
        //vemos que postulaciones son las correctas status 1
      })
      .catch((err) => console.log(err));
  };

  getDiplomados = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:1818/Diplomado")
      .then((response) => {
        this.setState({ diplomados: response.data });
        console.log(this.state.diplomados);
        //vemos que postulaciones son las correctas status 1
      })
      .catch((err) => console.log(err));
  };

  clickBoton = (e) => {
    this.getPostulaciones(e);
    this.getDiplomados(e);
  };

  handleShow = (e) => {
    this.setState({
      show: true,
    });
  };

  handleClose = (e) => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <div>
        <br />

        <Container fluid>
          <h1> Postulaciones </h1>

          <Button variant="primary" type="submit" onClick={this.clickBoton}>
            {" "}
            Ver{" "}
          </Button>
        </Container>

        <br />
        <br />

        <Container fluid>
          <ul>
            {this.state.postulaciones.map((postulacion) => (
              <div>
                {postulacion.status == 1 && (
                  <div>
                    <Card>
                      <Card.Header>Postulación {postulacion.id}</Card.Header>
                      <Card.Body>
                        <Card.Title>
                          <p> Postulante: {postulacion.nombre} </p>
                          <p> Mail: {postulacion.correo} </p>
                        </Card.Title>
                        <Card.Text>
                          {this.state.diplomados.map((diplomado) => (
                            <div>
                              {diplomado.id === postulacion.idDiplomado && (
                                <p>
                                  {" "}
                                  Este postulante está interesado en{" "}
                                  {diplomado.nombre}{" "}
                                </p>
                              )}
                            </div>
                          ))}{" "}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Accordion>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="0"
                          >
                            Ver archivos adjuntos
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <div>
                          <Card.Body>
                            <Card.Title>Archivos del postulante</Card.Title>
                          </Card.Body>
                          <Card.Footer className="text-muted">
                            <Row>
                              <Col sm={3}>
                                <Button variant="primary">
                                  Ver en mas detalles
                                </Button>
                              </Col>
                              <Col sm={8}></Col>
                              <Col sm={1}>
                                <Button variant="danger" onClick={this.handleShow}>
                                  Borrar
                                </Button>
                              </Col>
                            </Row>
                          </Card.Footer>
                          </div>
                        </Accordion.Collapse>
                      </Card>
                      <br />
                    </Accordion>
                  </div>
                )}
              </div>
            ))}{" "}
          </ul>
        </Container>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Rechazar postulante</Modal.Title>
          </Modal.Header>
          <Modal.Body>Se le enviara un correo al postulante.</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" size="sm" block onClick={this.handleClose}>
              {" "}
              Borrar Postulación{" "}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Postulaciones;
