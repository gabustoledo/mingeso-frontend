import React, { Component } from "react";
import { Button, Jumbotron, Container, Tab, Tabs } from "react-bootstrap";
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
            <h1>Diplomado en Ciencia de Datos Aplicada</h1>
            <p>Educación continua</p>
          </Container>
        </Jumbotron>

        <Tabs defaultActiveKey="Objetivos" id="uncontrolled-tab-example">
          <Tab eventKey="Objetivos" title="Objetivos">
            <div class="tab-pane single active" id="9055">
              <br></br>
              <p>
                <strong>OBJETIVO DEL PROGRAMA</strong>
                <br></br>
                El programa tiene como objetivo general formar especialistas que
                sean capaces de aplicar las técnicas y herramientas de análisis
                de datos, con rigurosidad y ética, con el fin de mejorar de
                procesos para la toma de decisiones en diversas áreas de
                desempeño profesional.
              </p>
              <p>
                <strong>DESCRIPCIÓN DEL PROGRAMA</strong>
              </p>
              <p>
                El Diplomado en ciencia de datos aplicada entrega los
                conocimientos necesarios en el uso de técnicas y herramientas de
                análisis de datos, con el fin de mejorar procesos de tomas de
                decisiones en diversas áreas de desempeño profesional.
              </p>
              <p>
                El programa busca por medio de un enfoque aplicado generar
                habilidades de programación, exploración y modelamiento de
                datos, finalizando con un proyecto práctico en donde se aplican
                los conocimientos y herramientas vistas, buscando dar solución a
                problemáticas mediante la ciencia de datos.
              </p>
              <p>
                El diplomado está estructurado en 6 módulos y tiene una duración
                de 180 horas cronológicas con 120 horas de docencia directa.
              </p>
              <p>&nbsp;</p>
            </div>
          </Tab>
          <Tab eventKey="Plan de Estudios" title="Plan de Estudios">
            <div class="tab-pane single" id="9049">
              <br></br>
              <h4>Número de cursos y&nbsp;duración</h4>
              <ul>
                <li>
                  El diplomado está estructurado en 6 módulos y 180 horas
                  cronológicas.
                </li>
                <li>Horario: Lunes a jueves de 19:00 a 22:00 horas.</li>
                <li>Modalidad: On-Line</li>
              </ul>
              <h4>Cursos del programa</h4>
              <p>
                El diplomado tiene una duración total de estudios de 180 horas y
                está estructurado en 6 módulos.
              </p>
              <ul>
                <li>Fundamentos de ciencia de datos.</li>
                <li>Programación en la ciencia de datos.</li>
                <li>Big data.</li>
                <li>Análisis exploratorio de datos.</li>
                <li>Modelamiento basado en datos.</li>
                <li>Proyecto de ciencia de datos aplicados.</li>
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
            </div>
          </Tab>
          <Tab eventKey="Cuerpo Docente" title="Cuerpo Docente">
            <div class="tab-pane single" id="9052">
              <br></br>
              <p>
                El cuerpo docente se compone de auditores e ingenieros de alto
                nivel académico o profesionales de reconocido&nbsp;prestigio y
                experiencia laboral.
              </p>
              <p>Manuel Villalobos-Cid (Académico, DIINF)</p>
              <ul>
                <li>
                  Doctorado en Ciencias de la Ingeniería con Mención
                  Informática, Universidad de Santiago de Chile.
                </li>
                <li>Ingeniero Biomédico, Universidad de Valparaíso.</li>
              </ul>
              <p>Felipe-Andrés Bello Robles (Académico, DIM)</p>
              <ul>
                <li>
                  Doctor en Ciencias de la Ingeniería con mención en
                  Informática, Universidad de Santiago de Chile.
                </li>
                <li>
                  Magíster en Ingeniería Informática, Universidad de Santiago de
                  Chile.
                </li>
                <li>
                  Ingeniero Civil Informático, Universidad de Santiago de Chile.
                </li>
              </ul>
              <p>Carolina Bonacic Castro (Académica, DIINF)</p>
              <ul>
                <li>
                  PhD in Computer Science, Universidad Complutense de Madrid.
                </li>
                <li>
                  Magíster en Ciencias de la Computación, Universidad de Chile.
                </li>
                <li>
                  Ingeniero de Ejecución en Computación e Informática,
                  Universidad de Magallanes.
                </li>
              </ul>
              <p>Diego Caro Alarcón (Académico, DIINF)</p>
              <ul>
                <li>
                  Doctor en Ciencias de la Computación, Universidad de
                  Concepción.
                </li>
                <li>Ingeniero Civil Informático, Universidad de Concepción.</li>
              </ul>
              <p>Mario Inostroza Ponta (Académico, DIINF)</p>
              <ul>
                <li>PhD in Computer Science, The University of Newcastle.</li>
                <li>
                  Magíster en Ingeniería Informática, Universidad de Santiago de
                  Chile.
                </li>
                <li>
                  Ingeniero Civil en Informática, Universidad de Santiago de
                  Chile.
                </li>
              </ul>
              <p>Mauricio Marín Caihuán (Académico, DIINF)</p>
              <ul>
                <li>PhD in Computer Science, University of Oxford.</li>
                <li>
                  Magister Ciencias de la Computación , Universidad de Chile.
                </li>
                <li>
                  Ingeniero de Ejecución en Electricidad, Universidad de
                  Magallanes.
                </li>
              </ul>
              <p>Roberto González Ibáñez (Académico, DIINF)</p>
              <ul>
                <li>
                  PhD in Communication, Information, and Library Studies,
                  Rutgers University.
                </li>
                <li>
                  Magíster en Ingeniería Informática, Universidad de Santiago de
                  Chile.
                </li>
                <li>
                  Ingeniero Civil Informático, Universidad de Santiago de Chile.
                </li>
              </ul>
            </div>
          </Tab>
          <Tab eventKey="Aranceles" title="Aranceles">
            <div class="tab-pane single" id="9057">
              <br></br>
              <h4>Aranceles</h4>
              <ul>
                <li>
                  El valor total del diplomado asciende a $2.900.000 (valor año
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
            <br></br>
            <h4>Requisitos de ingreso</h4>
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
              <li>Horario: Lunes a jueves 19:00 a 22:00 horas.</li>
              <li>Modalidad: El diplomado se dictará en modalidad On-Line.</li>
            </ul>
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
