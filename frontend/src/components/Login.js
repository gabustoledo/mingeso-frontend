import React, { Component } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import axios from "axios";

class Inicio extends Component {
  constructor() {
    super();
    this.state = {
      nombre: "",
      rut: "",
      rol: "",
      id: "",
      email: "",
      pass: "",
      showLogValido: false,
      showLogInvalido: false,
      log: false,
    };
  }

  setEmail = (e) => {
    const { value } = e.target;
    this.setState({
      email: value,
    });
  };

  setPass = (e) => {
    const { value } = e.target;
    this.setState({
      pass: value,
    });
  };

  log = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:1818/AdministrativoLogin", {
        correo: this.state.email,
        contrasena: this.state.pass,
      })
      .then((response) => {
        if (response.data) {
          this.setState({
            id: response.data[0].id,
            nombre: response.data[0].nombre,
            rut: response.data[0].rut,
            rol: response.data[0].rol,
          });
          this.setState({
            showLogValido: true,
            log: true,
          });
        } else {
          this.setState({
            showLogInvalido: true,
          });
        }
      })
      .catch((err) => console.log(err));
  };
  handleCloseValido = (e) => {
    this.setState({
      showLogValido: false,
    });
  };

  handleCloseInvalido = (e) => {
    this.setState({
      showLogInvalido: false,
    });
  };

  render() {
    return (
      <div>
        <title> Inicio de Sesión </title>

        <Form onSubmit={this.log}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Dirección Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={this.setEmail}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Contraseña"
              onChange={this.setPass}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>

        <Modal show={this.state.showLogValido} onHide={this.handleCloseValido}>
          <Modal.Header closeButton>
            <Modal.Title>Bienvenido {this.state.nombre}!!</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseValido}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={this.state.showLogInvalido}
          onHide={this.handleCloseInvalido}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Lo siento, los datos ingresados no son validos.
            </Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseInvalido}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Inicio;
