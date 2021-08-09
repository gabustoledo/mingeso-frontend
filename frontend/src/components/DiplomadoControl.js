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
            <h1>Diplomado en Control, Seguridad y Auditoria Computacional</h1>
            <p>Educación continua</p>
          </Container>
        </Jumbotron>

        <Tabs defaultActiveKey="Objetivos" id="uncontrolled-tab-example">
          <Tab eventKey="Objetivos" title="Objetivos">
            <div class="tab-pane single active" id="3875">
              <br></br>
              <h4>Objetivo del programa</h4>
              <p>
                Proporcionar a informáticos y auditores conocimientos que le
                permitan realizar actividades de auditoría computacional y
                enfrentar problemas de seguridad de sistemas.
              </p>
              <h4>Descripción del programa</h4>
              <p>
                El diplomado desarrolla metodologías , procedimientos y técnicas
                que permitan auditar y mejorar a los estudiantes en la
                definición de políticas, construcción de planes y establecer
                criterios para una adecuada gestión de la seguridad informática
                en las organizaciones. Adicionalmente, el diplomado se enfoca en
                evaluar los riesgos que existen en la aplicación de las
                tecnologías de la información. Finalmente se abordan
                procedimientos y controles que permitan disminuir o evitar el
                impacto de los riesgos.
              </p>
            </div>
          </Tab>
          <Tab eventKey="Plan de Estudios" title="Plan de Estudios">
            <div class="tab-pane single" id="4088">
              <h4>Número de cursos y&nbsp;duración</h4>
              <ul>
                <li>
                  El dimplomado tiene una duración total de estudios de 120
                  horas y está estructurado en 10 cursos.
                </li>
                <li>Horario: lunes a jueves de 19:00 a 22:00 horas.</li>
                <li>
                  Modalidad: El Diplomado se dictará en modalidad On-Line.
                </li>
              </ul>
              <h4>Cursos del programa</h4>
              <p>
                El programa de estudios del diplomado en Control, Seguridad y
                Auditoría Computacional ofrece 10 cursos.
              </p>
              <ol>
                <li>Auditoría Computacional y Seguridad de Sistemas I</li>
                <li>Auditoría Computacional y Seguridad de Sistemas II</li>
                <li>
                  Desarrollo de un programa de seguridad en ambientes y sistemas
                  computacionales de la organización.
                </li>
                <li>Controles a sistemas en desarrollo y producción</li>
                <li>Redes de Computadores</li>
                <li>Seguridad en Redes I</li>
                <li>Seguridad en Redes II</li>
                <li>
                  Metodologías para controlar los riesgos en la utilización de
                  TI (COSO, ITIL y COBIT).
                </li>
                <li>Seguridad en Bases de Datos</li>
                <li>Delitos informáticos</li>
              </ol>
              <h4>Requisitos de aprobación</h4>
              <ul>
                <li>Aprobar todos los cursos del diplomado (10 cursos).</li>
                <li>
                  Asistencia de un 75% a las horas de clase de cada curso del
                  diplomado.
                </li>
                <li>
                  Nota mínima 4,0 (en escala de 1,0 a 7,0) en cada curso del
                  diplomado.
                </li>
              </ul>
            </div>
          </Tab>
          <Tab eventKey="Cuerpo Docente" title="Cuerpo Docente">
            <div class="tab-pane single" id="4090">
              <br></br>
              <p>
                El cuerpo docente que participa en la impartición de este
                Diplomado está compuesto por auditores, ingenieros, abogados y
                policías de alto nivel académico o profesionales
                de&nbsp;reconocido prestigio y experiencia laboral.
              </p>
              <p>Juan Rodrigo Anabalón</p>
              <ul>
                <li>
                  Magíster en Seguridad, Peritaje y Auditoría en Procesos
                  Informáticos. Universidad de Santiago de Chile.
                </li>
                <li>
                  Diplomado en Control, Seguridad y Auditoría Informática.
                  Universidad de Santiago de Chile.
                </li>
                <li>
                  Diplomado en Peritaje Informático. Universidad de Santiago de
                  Chile.
                </li>
                <li>
                  Licenciado en Ciencias de la Ingeniería. Universidad de las
                  Américas.
                </li>
                <li>
                  Ingeniero de Ejecución en Informática. Universidad de las
                  Américas.
                </li>
              </ul>
              <p>Claudio Ossa Rojas</p>
              <ul>
                <li>Abogado, Universidad de Chile.</li>
                <li>
                  Diplomado en Estado de Derecho y Reformas a la Justicia,
                  Universidad de Chile.
                </li>
              </ul>
              <p>Waldo Gómez Román</p>
              <ul>
                <li>
                  Ingeniero de Ejecución Industrial, Universidad Andrés Bello.
                </li>
                <li>
                  Ingeniero en&nbsp;Gestión de Empresas, Universidad Diego
                  Portales.
                </li>
                <li>
                  Diplomado en Control, Seguridad y Auditoria
                  Computacional,&nbsp;Universidad de Santiago de Chile.
                </li>
                <li>
                  Diplomado en Peritaje Informático,&nbsp;Universidad de
                  Santiago de Chile.
                </li>
              </ul>
              <p>Julián Márquez López</p>
              <ul>
                <li>
                  Ingeniero Electrónico y de Telecomunicaciones, Universidad San
                  Martín – Colombia
                </li>
                <li>CISA (Certified Information Systems Auditor)</li>
                <li>
                  CRISC (Certified Risk in Information Systems and Controls)
                </li>
              </ul>
            </div>
          </Tab>
          <Tab eventKey="Aranceles" title="Aranceles">
            <div class="tab-pane single" id="4092">
              <br></br>
              <h4>Aranceles</h4>
              <ul>
                <li>
                  El valor total del diplomado asciende a $2.680.000 (valor año
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
              <div></div>
            </div>
          </Tab>
          <Tab eventKey="Admisión" title="Admisión">
            <div class="tab-pane single" id="4094">
              <br></br>
              <h4>Dirigido a</h4>
              <ul>
                <li>
                  El Programa está dirigido a todas las personas que se
                  encuentren desempeñando funciones tales como auditores,
                  ingenieros informáticos o ejecutivos de estas áreas.
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
