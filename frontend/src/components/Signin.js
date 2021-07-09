import React, { Component } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import axios from "axios";

const postAcademicoDiplomado = (idAcademico, idDiplomado) => {
  axios
    .post("http://localhost:1818/AdministrativoDiplomado", {
      idAdministrativo: idAcademico,
      idDiplomado: idDiplomado,
    })
    .catch((err) => console.log(err));
};

class Inicio extends Component {
  constructor() {
    super();
    this.state = {
      nombre: "",
      rut: "",
      email: "",
      pass: "",
      rol: "",
      show: false,
      ciencia: false,
      ciberseguridad: false,
      riesgo: false,
      control: false,
      peritaje: false,
      id: "",
    };
  }

  setNombre = (e) => {
    const { value } = e.target;
    this.setState({
      nombre: value,
    });
  };

  setRut = (e) => {
    const { value } = e.target;
    this.setState({
      rut: value,
    });
  };

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

  setRolSecretaria = (e) => {
    this.setState({
      rol: 1,
    });
  };

  setRolComite = (e) => {
    this.setState({
      rol: 2,
    });
  };

  setRolDirector = (e) => {
    this.setState({
      rol: 3,
    });
  };

  Registrarse = (e) => {
    e.preventDefault();
    if (this.state.rol === 2) {
      this.setState({
        show: true,
      });
    }
    axios
      .post("http://localhost:1818/Administrativo", {
        nombre: this.state.nombre,
        rut: this.state.rut,
        correo: this.state.email,
        rol: this.state.rol,
        activo: false,
        contrasena: this.state.pass,
      })
      .then((response) => {
        this.setState({ id: response.data.id });
      })
      .catch((err) => console.log(err));
  };

  handleClose = (e) => {
    this.setState({
      show: false,
    });

    if (this.state.ciencia) {
      postAcademicoDiplomado(this.state.id, 1);
    }
    if (this.state.ciberseguridad) {
      postAcademicoDiplomado(this.state.id, 2);
    }
    if (this.state.riesgo) {
      postAcademicoDiplomado(this.state.id, 3);
    }
    if (this.state.control) {
      postAcademicoDiplomado(this.state.id, 4);
    }
    if (this.state.peritaje) {
      postAcademicoDiplomado(this.state.id, 5);
    }
  };

  setCiencia = (e) => {
    this.setState({
      ciencia: !this.state.ciencia,
    });
  };

  setCiberseguridad = (e) => {
    this.setState({
      ciberseguridad: !this.state.ciberseguridad,
    });
  };

  setRiesgo = (e) => {
    this.setState({
      riesgo: !this.state.riesgo,
    });
  };

  setControl = (e) => {
    this.setState({
      control: !this.state.control,
    });
  };

  setPeritaje = (e) => {
    this.setState({
      peritaje: !this.state.peritaje,
    });
  };

  render() {
    return (
      <div>

        <h1> Registro de usuario </h1>

        <Form onSubmit={this.Registrarse}>
          <Form.Group>
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre y Apellido"
              onChange={this.setNombre}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Rut</Form.Label>
            <Form.Control
              type="text"
              placeholder="Rut"
              onChange={this.setRut}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
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

          <Form>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Secretaria"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                  onChange={this.setRolSecretaria}
                />
                <Form.Check
                  inline
                  label="Integrante Comite"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                  onChange={this.setRolComite}
                />
                <Form.Check
                  inline
                  label="Director"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                  onChange={this.setRolDirector}
                />
              </div>
            ))}
          </Form>

          <Button variant="primary" type="submit">
            Registrarse
          </Button>
        </Form>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Diplomados</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6>Selecciones los diplomados a los cuales ud. pertenece.</h6>

            <Form>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  onChange={this.setCiencia}
                  label="Diplomado de Ciencia de Datos Aplicada"
                />
                <Form.Check
                  type="checkbox"
                  onChange={this.setCiberseguridad}
                  label="Diplomado en Ciberseguridad"
                />
                <Form.Check
                  type="checkbox"
                  onChange={this.setRiesgo}
                  label="Diplomado en Riesgo Operacional y Continuidad del Negocio en Procesos y TICs"
                />
                <Form.Check
                  type="checkbox"
                  onChange={this.setControl}
                  label="Diplomado en Control, Seguridad y Auditoria Computacional"
                />
                <Form.Check
                  type="checkbox"
                  onChange={this.setPeritaje}
                  label="Diplomado en Peritaje Infomatico"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={this.handleClose}>
              Enviar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Inicio;
