//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Encabezado from './components/Encabezado.js'
import Footer from './components/Footer.js'
import Inicio from './components/Inicio.js'
import Login from './components/Login.js'
import Signin from './components/Signin.js'
import Diplomados from './components/Diplomados.js'
import DiplomadoCiberseguridad from './components/DiplomadoCiberseguridad.js'
import DiplomadoCienciaDatos from './components/DiplomadoCienciaDatos.js'
import DiplomadoControl from './components/DiplomadoControl.js'
import DiplomadoPeritaje from './components/DiplomadoPeritaje.js'
import DiplomadoRiesgo from './components/DiplomadoRiesgo.js'
import MainSecretaria from './components/MainSecretaria.js'
import Postulaciones from './components/Postulaciones'
import Aceptadas from './components/Aceptadas'
import Rechazadas from './components/Rechazadas.js'
import Correo from './components/Correo.js'
import PostulacionEnviada from './components/PostulacionEnviada.js'

import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
    return (
        <Router>
            <Encabezado />
            <div className="container">
                <Route path="/" exact component={Inicio} />
                <Route path="/login" component={Login} />
                <Route path="/registrar" component={Signin} />
                <Route path="/diplomados" component={Diplomados} />
                <Route path="/DiplomadoCiberseguridad" component={DiplomadoCiberseguridad} />
                <Route path="/DiplomadoCienciaDatos" component={DiplomadoCienciaDatos} />
                <Route path="/DiplomadoControl" component={DiplomadoControl} />
                <Route path="/DiplomadoPeritaje" component={DiplomadoPeritaje} />
                <Route path="/DiplomadoRiesgo" component={DiplomadoRiesgo} />
                <Route path="/Secretaria" component={MainSecretaria} />
                <Route path="/Postulaciones" component={Postulaciones} />
                <Route path="/Aceptadas" component={Aceptadas} />
                <Route path="/Rechazadas" component={Rechazadas} />
                <Route path="/Correo" component={Correo} />
                <Route path="/PostulacionEnviada" component={PostulacionEnviada} />

            </div>
            <br></br><br></br>
            
            < Footer /> 

        </Router>
    );
}

export default App;
