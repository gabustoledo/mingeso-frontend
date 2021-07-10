import React, { Component } from "react";
import { Button, Jumbotron, Container, Tab, Tabs, Form} from 'react-bootstrap';
import Correo from './Correo.js'
//import axios from "axios"

class Inicio extends Component {
    constructor(){
        super();
        this.state = {
            primerNumeroSuma: "",
            segundoNumeroSuma: "",
            resultadoSuma: "",
            primerNumeroResta: "",
            segundoNumeroResta: "",
            resultadoResta: ""
        };
    }

    render() {
        return(
            
            <div>

            <Jumbotron fluid>
                <Container>
                    <h1>Diplomado en Peritaje Informático</h1>
                    <p>
                    Educación continua
                    </p>
                </Container>
            </Jumbotron>

            <Tabs defaultActiveKey="Objetivos" id="uncontrolled-tab-example">
                <Tab eventKey="Objetivos" title="Objetivos">
                <div class="tab-pane single active" id="4005">
                <br></br>
                    <p>El Diplomado está dirigido a abogados, ingenieros informáticos, auditores y oficiales de la Fuerzas Armadas o de Orden.</p>
                    <p>Este diplomado tiene como objetivo preparar a profesionales relacionados con los procesos de la reforma al sistema de justicia nacional en temas informáticos que les permitan afrontar, con conocimientos adecuados, las exigencias de esta nueva disciplina en el ámbito legislativo, judicial y policial.</p>
                    <p>El programa contempla en su desarrollo, clases, magistrales, casos prácticos como teóricos, disertaciones, trabajos grupales, trabajos individuales, aplicaciones a una realidad concreta y pruebas.</p>
                </div>
                </Tab>
                <Tab eventKey="Plan de Estudios" title="Plan de Estudios">
                <div class="tab-pane single" id="4007">
                <br></br>
                    <h4>Número de cursos y duración</h4>
                    <ul>
                    <li>El diplomado tiene una duración total de 192 horas y está estructurado en 16 cursos.</li>
                    <li>Horario: Lunes a jueves de 19:00 a 22:00 horas</li>
                    <li>Modalidad: On-Line</li>
                    </ul>
                    <h4>Cursos del programa</h4>
                    <p>El programa de estudios del diplomado en Peritaje Informático ofrece 16 cursos.</p>
                    <ol>
                    <li>Redes de computadores</li>
                    <li>Seguridad en redes de computadores I</li>
                    <li>Seguridad en redes de computadores II</li>
                    <li>Criptografía</li>
                    <li>Laboratorio de encriptación y firma digital</li>
                    <li>Documento electrónico y firma digital</li>
                    <li>Derechos de autor sobre el software, bases de datos y otras tecnologías</li>
                    <li>Hacking ético</li>
                    <li>Elementos básicos de peritaje informático I</li>
                    <li>Elementos básicos de peritaje informático II</li>
                    <li>Taller de peritaje informático</li>
                    <li>Delitos informáticos</li>
                    <li>Imágenes digitales: herramientas de la criminalística</li>
                    <li>Protección de datos personales</li>
                    <li>Informática forense</li>
                    <li>Seguridad en bases de datos</li>
                    </ol>
                    <h4>Requisitos de aprobación</h4>
                    <p>Los requisitos de aprobación de cada curso corresponden a evaluaciones escritas y trabajos de desarrollo individual y grupal, de acuerdo a lo propuesto por cada profesor. Para aprobar el diplomado completo el alumno deberá:</p>
                    <ul>
                    <li>Aprobar todos los cursos del diplomado (16 cursos).</li>
                    <li>Asistencia de un 75% a las horas de clase de cada curso del diplomado.</li>
                    <li>Nota mínima 4,0 (en escala de 1,0 a 7,0) en cada curso del diplomado.</li>
                    </ul>
                    <p>&nbsp;</p>
                </div>
                </Tab>
                <Tab eventKey="Cuerpo Docente" title="Cuerpo Docente">
                <div class="tab-pane single" id="4009">
                <br></br>
                    <p>El cuerpo docente se compone de auditores e ingenieros de alto nivel académico o profesionales de reconocido&nbsp;prestigio y experiencia laboral.</p>
                    <p>Claudio Ossa Rojas</p>
                    <ul>
                    <li>Abogado, Universidad de Chile.</li>
                    <li>Diplomado en Estado de Derecho y Reformas a la Justicia, Universidad de Chile.</li>
                    </ul>
                    <p>Felipe Sánchez Fabres</p>
                    <ul>
                    <li>Ingeniero de Ejecución en Computación e Informática, Universidad de Santiago de Chile.</li>
                    </ul>
                    <p>Gregorio Zaviezo</p>
                    <ul>
                    <li>Ingeniero Comercial, mención Informática, Universidad de Santiago de Chile.</li>
                    <li>Diplomado en Peritaje Informático, Universidad de Santiago de Chile.</li>
                    <li>Diplomado en Control, Seguridad y Auditoría Computacional, Universidad de Santiago de Chile.</li>
                    </ul>
                    <p>Marcelo Huerta Miranda</p>
                    <ul>
                    <li>Licenciado en Ciencias Jurídicas y Sociales, Universidad Las Condes. Título de Abogado.</li>
                    <li>Magíster en Derecho Público con Mención en Derecho Constitucional, Universidad Católica de Chile.</li>
                    </ul>
                    <p>Waldo Gómez Román</p>
                    <ul>
                    <li>Ingeniero de Ejecución Industrial, Universidad Andrés Bello.</li>
                    <li>Ingeniero en&nbsp;Gestión de Empresas, Universidad Diego Portales.</li>
                    <li>Diplomado en Control, Seguridad y Auditoria Computacional,&nbsp;Universidad de Santiago de Chile.</li>
                    <li>Diplomado en Peritaje Informático,&nbsp;Universidad de Santiago de Chile.</li>
                    </ul>
                    <p>Felipe Sanchez Fabre</p>
                    <ul>
                    <li>Ingeniero de Ejecución en Computación e Informática,&nbsp;Universidad de Santiago de Chile.</li>
                    <li>Diplomado en Peritaje Informático,&nbsp;Universidad de Santiago de Chile.</li>
                    <li>Perito Informático, Academia Superior de Estudios Policiales, Policía de Investigaciones de Chile.</li>
                    <li>Diplomado en Criminalística y Metodología Forense, Universidad de Valparaíso.</li>
                    <li>Diplomado en Control, Seguridad y Auditoria Computacional,&nbsp;Universidad de Santiago de Chile.</li>
                    </ul>
                    <p>Carlos Lobos Medina</p>
                    <ul>
                    <li>Ingeniero Civil Informático, Universidad de Santiago de Chile.</li>
                    <li>Diplomado en Auditoría de Sistemas, Universidad de Chile.</li>
                    <li>Diplomado en Seguridad Computacional, Universidad de Chile.</li>
                    </ul>
                    <p>Armando Muñoz Moreno</p>
                    <ul>
                    <li>Licenciado en Ciencias de la Investigación Criminalística,&nbsp;Academia Superior de Ciencias Policiales, PDI.</li>
                    <li>Creador y ex jefe de la Brigada Investigadora del Ciber Crimen (Bricib) de la PDI.</li>
                    <li>Prefecto ® de la Policía de Investigaciones de Chile.</li>
                    <li>Diplomado, en Auditoría, Control y Seguridad Informática,&nbsp;Universidad de Santiago de Chile.</li>
                    <li>Licenciado en Comunicación Publicitaria, Mención Gestión Creativa, Universidad de Santiago de Chile.</li>
                    <li>Magíster en Didáctica para la Educación Superior,&nbsp;Universidad de Tarapacá.</li>
                    <li>Doctor en Comunicación,&nbsp;Universidad de Artes, Ciencias y Comunicación.</li>
                    </ul>
                </div>
                </Tab>
                <Tab eventKey="Aranceles" title="Aranceles">
                <div class="tab-pane single" id="4013">
                <br></br>
                    <h4>Aranceles</h4>
                    <ul>
                    <li>El valor total del diplomado asciende a $ 3.861.000 (valor año 2021, 1° Semestre).</li>
                    <li>Derecho de inscripción por un valor de $63.000.</li>
                    <li>Este diplomado no está adscrito a código SENCE.</li>
                    <li>Este diplomado no está adscrito a convenio marcoo.</li>
                    </ul>
                    <h4>Descuentos</h4>
                    <p>Descuentos para aquellas personas que vienen con financiamiento propio (no son financiados desde una empresa/organización).</p>
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
                    <li>Los descuentos son aplicables solamente para pagos realizados hasta antes del inicio de clases de los diplomados.</li>
                    <li>Los descuentos no aplican para los cursos de los diplomados en el caso de que éstos se tomen de manera individual.</li>
                    </ul>
                    <div></div>
                </div>
                </Tab>
                <Tab eventKey="Admisión" title="Admisión">
                <div class="tab-pane single" id="4015">
                <br></br>
                    <h4>Dirigido a</h4>
                    <ul>
                    <li>El Programa está dirigido a todas las personas que se encuentren desempeñando funciones tales como abogados, ingenieros informáticos, auditores y oficiales de la Fuerzas Armadas o del Orden.</li>
                    </ul>
                    <h4>Requisitos de ingreso</h4>
                    <ul>
                    <li>Título profesional o Certificado de Egreso (original entregado por la institución de educación superior o fotocopia legalizada ante notario).</li>
                    <li>Certificado de nacimiento.</li>
                    <li>Copia de Cédula de identidad (escaneado por ambos lados).</li>
                    <li>Currículum Vitae.</li>
                    <li>Ficha de inscripción.</li>
                    <li><em>Nota: Toda esta documentación debe ser enviada en formato digital por e-mail.</em></li>
                    </ul>
                    <h4>Fechas y modalidad de estudio</h4>
                    <ul>
                    <li>Fecha de inicio: Semana del 19 abril del 2021</li>
                    <li>Modalidad: El diplomado se dictará en modalidad On-Line.</li>
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
                Envíe sus datos y los documentos solicitados para generar una postulación
                <br></br>
                <h4>Documentos requeridos</h4>
                    <ul>
                    <li>Título profesional o Certificado de Egreso (original entregado por la institución de educación superior o fotocopia legalizada ante notario).</li>
                    <li>Certificado de nacimiento.</li>
                    <li>Copia de Cédula de identidad (escaneado por ambos lados).</li>
                    <li>Currículum Vitae.</li>
                    <li>Ficha de inscripción.</li>
                    </ul>
                
                <Button href="http://localhost:1818/files">Envio de documentos </Button>
                </Tab>
                

            </Tabs>

            </div>

        );
    }
}

export default Inicio;