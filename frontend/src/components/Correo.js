import React, { Component } from "react";
import { init } from "emailjs-com";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

class Correo extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      correo: "",
    };
  }
  setName = (e) => {
    const { value } = e.target;
    this.setState({
      name: value,
    });
  };

  setCorreo = (e) => {
    const { value } = e.target;
    this.setState({
      correo: value,
    });
  };

  sendEmail = (e) => {
    e.preventDefault();
    init("user_ay3nHtArF78u0Dl4PhfTM");

    var data = {
      service_id: "service_ltswa5w",
      template_id: "template_1gojoj9",
      user_id: "user_ay3nHtArF78u0Dl4PhfTM",
      template_params: {
        name: this.state.name,
        correo: this.state.correo,
      },
    };

    axios
      .post("https://api.emailjs.com/api/v1.0/email/send", data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <Form onSubmit={this.sendEmail}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre </Form.Label>
          <Form.Control
            type="nombre"
            placeholder="Pepe Rodriguez"
            onChange={this.setName}
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email </Form.Label>
          <Form.Control
            type="email"
            placeholder="nombre@ejemplo.com"
            onChange={this.setCorreo}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
export default Correo;
