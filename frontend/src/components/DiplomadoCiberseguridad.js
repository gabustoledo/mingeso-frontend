import React, { Component } from "react";
import { Jumbotron, Container, Tab, Tabs, Button } from "react-bootstrap";
import Correo from "./Correo.js";

class Inicio extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container>
            <h1>Diplomado en Ciberseguridad</h1>
            <p>Educación continua</p>
          </Container>
        </Jumbotron>

        <Tabs defaultActiveKey="Objetivos" id="uncontrolled-tab-example" active>
          <Tab eventKey="Objetivos" title="Objetivos">
            <br></br>
            <h4>Objetivo general</h4>
            <p>
              Contribuir al desarrollo y mejora de la Ciberseguridad, en
              aspectos de gestión, de técnicas y de cuestiones legales, en
              organizaciones públicas y privadas del país, mediante la formación
              y especialización de las y los profesionales partícipes de los
              distintos procesos de TICs, permitiendo con ello aportar para
              tener organizaciones seguras y resilentes frente a riesgos y
              amenazas de ciberataques internos y externos.
            </p>
            <h4>Objetivos específicos</h4>
            <ul>
              <li>
                Comprender los principales lineamientos en la gestión
                estratégica para lograr una gestión y gobernanza eficaz en
                Ciberseguridad.
              </li>
              <li>
                Diseñar estrategias de ciberseguridad junto con el plan de
                acción para su implementación.
              </li>
              <li>
                Conocer aspectos legales de la Ciberseguridad a nivel nacional e
                internacional.
              </li>
              <li>
                Adquirir herramientas para proteger, monitorear, y administrar
                la infraestructura TI dentro de una organización.
              </li>
              <li>
                Analizar y evaluar los sistemas de Ciberseguridad orientadas a
                brindar un soporte fundamental a la estrategia del negocio de
                las organizaciones.
              </li>
            </ul>
          </Tab>
          <Tab eventKey="Plan de Estudios" title="Plan de Estudios">
            <br></br>
            <h4>Número de cursos y&nbsp;duración</h4>
            <ul>
              <li>El diplomado está estructurado en 7 cursos y 105 horas.</li>
              <li>Horario: Lunes y miércoles de 19:00 a 22:00 horas.</li>
              <li>Modalidad: On-Line</li>
            </ul>
            <h4>Cursos del programa</h4>
            <p>
              El diplomado tiene una duración total de estudios de 105 horas y
              está estructurado en 7 cursos.
            </p>
            <ul>
              <li>Fundamentos ciberseguridad y seguridad de la información</li>
              <li>Gestión y operación de la ciberseguridad</li>
              <li>Operación de la ciberseguridad y TI</li>
              <li>Seguridad y protección tecnológica</li>
              <li>Protección aplicativa, hacking ético y forense</li>
              <li>Tecnologías relacionadas</li>
              <li>Aspecto legales en ciberseguridad</li>
            </ul>
            <h4>Requisitos de Aprobación</h4>
            <ul>
              <li>Aprobar todos los cursos del diplomado (7 cursos).</li>
              <li>
                Asistencia de un 75% a las horas de clase de cada curso del
                diplomado.
              </li>
              <li>
                Nota mínima 4,0 (en escala de 1,0 a 7,0) para cada curso del
                diplomado.
              </li>
            </ul>
          </Tab>
          <Tab eventKey="Cuerpo Docente" title="Cuerpo Docente">
            <div class="tab-pane single active" id="8323">
              <br></br>
              <h4>Cuerpo docente</h4>
              <p>
                El cuerpo docente se compone de ingenieros de alto nivel
                académico y/o profesionales de reconocido prestigio y
                experiencia laboral.
              </p>
              <p>Eric Donders</p>
              <ul>
                <li>
                  Magíster en Seguridad de la Información, Universidad Central.
                </li>
                <li>Ingeniero Civil en Computación, Universidad de Chile.</li>
              </ul>
              <p>Andrés Pumarino</p>
              <ul>
                <li>Magister en Negocios, Universidad Adolfo Ibañez</li>
                <li>
                  Postítulo en Derecho Informático y de las Telecomunicaciones,
                  Universidad de Chile
                </li>
                <li>Abogado, Universidad Adolfo Ibáñez</li>
              </ul>
              <p>Daniel Pacheco Pacheco</p>
              <ul>
                <li>
                  Magíster en Seguridad, Peritaje y Auditoría en Procesos
                  Informáticos, Universidad de Santiago
                </li>
                <li>Instructor Trainer, Cisco Networking Academy</li>
                <li>Ingeniero en Telecomunicaciones, Inacap</li>
              </ul>
              <p>Arturo Terra</p>
              <ul>
                <li>Ingeniero Civil, Universidad de Chile</li>
                <li>
                  Diplomado en Gestión y Marketing, Universidad Adolfo Ibáñez.
                </li>
              </ul>
            </div>
          </Tab>
          <Tab eventKey="Aranceles" title="Aranceles">
            <div class="tab-pane single active" id="8325">
              <br></br>
              <h4>Aranceles</h4>
              <ul>
                <li>
                  El valor total del diplomado asciende a $3.150.000 (valor año
                  2021, 1° Semestre).
                </li>
                <li>Derecho de inscripción por un valor de $63.000.</li>
                <li>Este diplomado no está adscrito a código SENCE.</li>
                <li>Este diplomado no está adscrito a convenio marco.</li>
              </ul>
              <h4>Descuentos</h4>
              <p>
                Descuentos para aquellas personas que vienen con financiamiento
                propio (no son financiados desde una empresa/organización).
              </p>
              <ul>
                <li>Pago al contado (25%)</li>
                <li>Ex alumno pregrado USACH (15%)</li>
                <li>Ex alumno diplomados DIINF (15%)</li>
                <li>Ex alumno diplomados USACH (10%)</li>
                <li>Socios activos AGI (15%)</li>
                <li>Funcionario público (10%)</li>
              </ul>
              <p>IMPORTANTE:</p>
              <ul>
                <li>Los descuentos no son acumulables.</li>
                <li>
                  Los descuentos son aplicables solamente para pagos realizados
                  hasta antes del inicio de clases de los diplomados.
                </li>
                <li>
                  Los descuentos no aplican para los cursos de los diplomados en
                  el caso de que éstos se tomen de manera individual.
                </li>
              </ul>
            </div>
          </Tab>
          <Tab eventKey="Admisión" title="Admisión">
            <div class="tab-pane single active" id="8327">
              <br></br>
              <h4>Dirigido a</h4>
              <ul>
                <li>
                  El programa está dirigido a todos los profesionales que tengan
                  algún vínculo con las Tecnologías de la Información y
                  Comunicación.
                </li>
              </ul>
              <h4>Requisitos de ingreso</h4>
              <ul>
                <li>
                  Título profesional o Certificado de Egreso (original entregado
                  por la institución de educación superior o fotocopia
                  legalizada ante notario).
                </li>
                <li>Certificado de nacimiento.</li>
                <li>
                  Copia de Cédula de identidad (escaneado por ambos lados).
                </li>
                <li>Currículum Vitae.</li>
                <li>Ficha de inscripción.</li>
                <li>
                  <em>
                    Nota: Toda esta documentación debe ser enviada en formato
                    digital por e-mail.
                  </em>
                </li>
              </ul>
              <h4>Fechas y modalidad de estudio</h4>
              <ul>
                <li>Fecha de inicio: Semana del 19 abril del 2021</li>
                <li>
                  Modalidad: El diplomado se dictará en modalidad On-Line.
                </li>
              </ul>
            </div>
          </Tab>
          <Tab eventKey="Descarga" title="Descarga">
            <br></br>
            <p>Solicite mas informacion ingresando sus datos personales</p>
            <br></br>
            <Correo />
            <br></br>
          </Tab>

          <Tab eventKey="Postulación" title="Postulación">
            <br></br>
            Envíe sus datos y los documentos solicitados para generar una
            postulación
            <br></br>
            <h4>Documentos requeridos</h4>
            <ul>
              <li>
                Título profesional o Certificado de Egreso (original entregado
                por la institución de educación superior o fotocopia legalizada
                ante notario).
              </li>
              <li>Certificado de nacimiento.</li>
              <li>Copia de Cédula de identidad (escaneado por ambos lados).</li>
              <li>Currículum Vitae.</li>
              <li>Ficha de inscripción.</li>
            </ul>
            <Button href="http://localhost:1818/postulacion">
              Envio de documentos
            </Button>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Inicio;
