import React, { Component } from "react";
import { Button, Jumbotron, Container, Tab, Tabs } from "react-bootstrap";
import Correo from './Correo.js'

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
            <h1>
              Diplomado en Riesgo Operacional y Continuidad del Negocio en
              Proceso y Tics
            </h1>
            <p>Educación continua</p>
          </Container>
        </Jumbotron>

        <Tabs defaultActiveKey="Objetivos" id="uncontrolled-tab-example">
          <Tab eventKey="Objetivos" title="Objetivos">
            <div class="tab-pane single active" id="6662">
            <br></br>
              <h4>Objetivo general</h4>
              <p>
                Comprender, analizar y aplicar los conceptos asociados al Riesgo
                Operacional, así como la Gestión de Continuidad del Negocio y de
                sus componentes principales (BCP y DRP) enfocado en los procesos
                críticos del negocio y las TIC que apoyan dichos procesos.
              </p>
              <h4>Objetivos específicos</h4>
              <p>Al final del Diplomado el alumno será capaz de:</p>
              <ul>
                <li>
                  Comprender las bases teóricas y tecnológicas que permitan
                  entender los estándares internacionalmente aceptados en
                  gestión de riesgos, así como aplicar los elementos para poner
                  en práctica la arquitectura de gestión de riesgos en las
                  empresas en los ámbitos de los procesos críticos y de TI.
                </li>
                <li>
                  Introducirse en las últimas técnicas y mecanismos de Gestión
                  de Riesgos de los procesos críticos de negocios y el apoyo de
                  las TI.
                </li>
                <li>
                  Analizar, planificar, evaluar, entender y desarrollar
                  programas de gestión de riesgos aplicados en los procesos y en
                  TI.
                </li>
                <li>
                  Explicar los diferentes conceptos asociados a Riesgo
                  Operacional y Gestión de la Continuidad del Negocio en las
                  Organizaciones.
                </li>
                <li>
                  Describir las diferentes buenas prácticas, normas y estándares
                  internacionales relacionados con la Gestión del Riesgo
                  Operacional, Riesgo TIC y Continuidad del Negocio.
                </li>
                <li>
                  Aplicar metodologías y técnicas para desarrollar Planes de
                  Continuidad del Negocio y Planes de Continuidad Tecnológica en
                  las organizaciones.
                </li>
                <li>
                  Sensibilizar a su entorno respecto de la importancia para la
                  organización acerca de controlar los riesgos operacionales y
                  contar con planes de contingencia que les permitan enfrentar
                  eventos inesperados.
                </li>
              </ul>
            </div>
          </Tab>
          <Tab eventKey="Plan de Estudios" title="Plan de Estudios">
            <div class="tab-pane single" id="6664">
            <br></br>
              <h4>Número de cursos y&nbsp;duración</h4>
              <ul>
                <li>
                  El diplomado tiene una duración total de 108 horas y está
                  estructurado en 9 cursos.
                </li>
                <li>Horario: Martes y jueves de 19:00 a 22:00 horas.</li>
                <li>
                  Modalidad: El Diplomado se dictará en modalidad On-Line.
                </li>
              </ul>
              <h4>Cursos del programa</h4>
              <p>
                A continuación se&nbsp;enumeran&nbsp;los cursos que componen el
                diplomado y una breve descripción de su contenido .
              </p>
              <ol>
                <li>Fundamentos de Gestión de Riesgos.</li>
                <li>Gestión del Riesgo Operacional.</li>
                <li>Riesgos TIC.</li>
                <li>
                  Taller de aplicación de Evaluación de Riesgo: aplicación en un
                  caso práctico.
                </li>
                <li>
                  Riesgo Operacional relacionado con los Servicios
                  Externalizados.
                </li>
                <li>Gestión de la Continuidad del Negocio.</li>
                <li>DRP (Disaster Recovery Planning).</li>
                <li>
                  Taller de aplicación de un Plan de Recuperación ante Desastres
                  (DRP).
                </li>
                <li>Tópicos Avanzados</li>
              </ol>
              <h4>Requisitos de Aprobación</h4>
              <p>
                Los requisitos de aprobación de cada curso corresponden a
                evaluaciones escritas y trabajos de desarrollo individual y
                grupal, de acuerdo a lo propuesto por cada profesor. Para
                aprobar el diplomado completo el alumno deberá:
              </p>
              <ul>
                <li>Aprobar todos los cursos del diplomado (9 cursos).</li>
                <li>
                  Asistencia de un 75% a las horas de clase de cada curso del
                  diplomado.
                </li>
                <li>
                  Nota mínima 4,0 (en escala de 1,0 a 7,0) en cada curso del
                  diplomado.
                </li>
              </ul>
              <p>&nbsp;</p>
            </div>
          </Tab>
          <Tab eventKey="Cuerpo Docente" title="Cuerpo Docente">
            <div class="tab-pane single" id="6666">
            <br></br>
              <h4>Cuerpo docente</h4>
              <p>
                El cuerpo docente se compone de ingenieros de alto nivel
                académico y/o profesionales de reconocido prestigio y
                experiencia laboral.
              </p>
              <p>
                <a href="https://www.linkedin.com/in/gonzaloconcha">
                  <em>Gonzalo Concha</em>
                </a>
              </p>
              <ul>
                <li>
                  Magíster en Tecnologías de la Informacíón, Universidad Técnica
                  Federico Santa María.
                </li>
                <li>
                  Ingeniero Civil Electricista mención en Telecomunicaciones,
                  Universidad de Santiago de Chile.
                </li>
              </ul>
              <p>
                <a href="https://cl.linkedin.com/in/ericdonders/es">
                  <em>Eric Donders</em>
                </a>
              </p>
              <ul>
                <li>
                  Magíster en Seguridad de la Información de la Universidad
                  Central.
                </li>
                <li>Ingeniero Civil en Computación, Universidad de Chile.</li>
              </ul>
              <p>
                <a href="https://cl.linkedin.com/in/arturo-terra-b00a961a">
                  <em>Arturo Terra</em>
                </a>
              </p>
              <ul>
                <li>Ingeniero Civil, Universidad de Chile</li>
                <li>
                  Diplomado en Gestión y Marketing, Universidad Adolfo Ibañez.
                </li>
              </ul>
            </div>
          </Tab>
          <Tab eventKey="Aranceles" title="Aranceles">
            <div class="tab-pane single" id="6668">
            <br></br>
              <h4>Aranceles</h4>
              <ul>
                <li>
                  El valor total del diplomado asciende a $2.745.000 (valor año
                  2021, 1° semestres).
                </li>
                <li>Derecho de inscripción por un valor de $63.000.</li>
                <li>Este diplomado no está adscrito a código SENCE.</li>
                <li>Este diplomado no está adscrito a convenio marco.</li>
              </ul>
              <div>
                <h4>Descuentos</h4>
                <p>
                  Descuentos para aquellas personas que vienen con
                  financiamiento propio (no son financiados desde una
                  empresa/organización).
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
                    Los descuentos son aplicables solamente para pagos
                    realizados hasta antes del inicio de clases de los
                    diplomados.
                  </li>
                  <li>
                    Los descuentos no aplican para los cursos de los diplomados
                    en el caso de que éstos se tomen de manera individual.
                  </li>
                </ul>
              </div>
            </div>
          </Tab>
          <Tab eventKey="Admisión" title="Admisión">
            <div class="tab-pane single" id="6670">
            <br></br>
              <h4>Dirigido a</h4>
              <ul>
                <li>
                  El programa esta orientado a todos aquellos profesionales de
                  áreas relacionadas con la informática que requieran
                  capacitación en temas relacionados al Riesgo Operacional, así
                  como la Gestión de Continuidad del Negocio.
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
                <li>Fecha de inicio: Semana 19 Abril 2021</li>
                <li>Horario: Martes y jueves 19:00 a 22:00 horas.</li>
                <li>
                  Modalidad: El diplomado se dictará en modalidad On-Line.
                </li>
              </ul>
              <p>&nbsp;</p>
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
