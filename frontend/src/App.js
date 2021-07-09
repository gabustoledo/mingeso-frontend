//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Encabezado from './components/Encabezado.js'
import Footer from './components/Footer.js'
import Inicio from './components/Inicio.js'
import Signin from './components/Signin.js'

import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
    return (
        <Router>
            <Encabezado />
            <div className="container">
                <Route path="/" exact component={Inicio} />
                <Route path="/registrar" component={Signin} />
            </div>
            <br></br><br></br>
            
            < Footer /> 

        </Router>
    );
}

export default App;
