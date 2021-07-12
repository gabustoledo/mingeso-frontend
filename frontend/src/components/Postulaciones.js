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

class Postulaciones extends Component {
  constructor() {
    super();
    this.state = { postulaciones: [], diplomados: [], show: false, showAceptar:false };
  }

  getPostulaciones = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:1818/Formulario")
      .then((response) => {
        this.setState({ postulaciones: response.data });
      })
      .catch((err) => console.log(err));
  };

  getDiplomados = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:1818/Diplomado")
      .then((response) => {
        this.setState({ diplomados: response.data });
      })
      .catch((err) => console.log(err));
  };

  clickBoton = (e) => {
    e.preventDefault();
    this.getPostulaciones(e);
    this.getDiplomados(e);
  };

  borrarPostulacion = (e, id_postulacion) => {
    this.handleShow(e);
    e.preventDefault();
    axios
      .delete("http://localhost:1818/FormularioDelete/" + id_postulacion)
      .then((response) => {
      })
      .catch((err) => console.log(err));
  };

  aceptarPostulacion = (e, postulacion) => {
    this.handleShowAceptar(e);
    e.preventDefault();
    postulacion.status = 2
    axios
      .put("http://localhost:1818/FormularioUpdate", postulacion)
      .then((response) => {
      })
      .catch((err) => console.log(err));
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

  handleShowAceptar = (e) => {
    this.setState({
      showAceptar: true,
    });
  };

  handleCloseAceptar = (e) => {
    this.setState({
      showAceptar: false,
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
            Ver Postulaciones{" "}
          </Button>
        </Container>
        <br />
        <br />

        <Container fluid>
          <ul>
            {this.state.postulaciones.map((postulacion) => (
              <div>
                {postulacion.status === 1 && (
                  <div>
                    <Card>
                      <Card.Header>Postulación {postulacion.id}</Card.Header>
                      <div>
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
                      </div>
                    </Card>
                    <Accordion>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="0"
                          >
                            Ver archivos adjuntos:
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <div>
                            <Card.Body>
                              <Card.Title>Archivos del postulante</Card.Title>

                                <Button variant="link" href={`http://localhost:1818/files/${postulacion.id}/Titulo_Profesional.pdf`}>
                                  Titulo_Profesional.pdf
                                </Button>

                                <Button variant="link" href={`http://localhost:1818/files/${postulacion.id}/Certificado_Nacimiento.pdf`}>
                                  Certificado_Nacimiento.pdf
                                </Button>
                                
                                <Button variant="link" href={`http://localhost:1818/files/${postulacion.id}/Copia_cedula_Identidad.pdf`}>
                                  Copia_cedula_Identidad.pdf
                                </Button>

                                <Button variant="link" href={`http://localhost:1818/files/${postulacion.id}/Curriculum_Vitae.pdf`}>
                                  Curriculum_Vitae.pdf
                                </Button>

                                <Button variant="link" href={`http://localhost:1818/files/${postulacion.id}/Ficha_de_inscripcion.pdf`}>
                                  Ficha_de_inscripcion.pdf
                                </Button>
                                  
                            </Card.Body>
                            <Card.Footer className="text-muted">
                              <Row>
                                <Col sm={3}>
                                  <Button
                                    variant="primary"
                                    onClick={(e) =>
                                      this.aceptarPostulacion(e, postulacion)
                                    }
                                  >
                                    Aceptar
                                  </Button>
                                </Col>
                                <Col sm={7}></Col>
                                <Col sm={1}>
                                  <Button
                                    variant="danger"
                                    onClick={(e) =>
                                      this.borrarPostulacion(e, postulacion.id)
                                    }
                                  >
                                    Rechazar
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

        <Modal
          show={this.state.showAceptar}
          onHide={this.handleCloseAceptar}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Postulante aceptado</Modal.Title>
          </Modal.Header>
          <Modal.Body>La postulacion del estudiante pasara al comite para ser revisada.</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" size="sm" block onClick={this.handleCloseAceptar}>
              {" "}
              Aceptar{" "}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Postulaciones;
