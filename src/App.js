import React from "react";
import ComponenteAPI from "./componentes/ComponenteAPI/ComponenteAPI";
import ComponenteFuncional from "./componentes/ComponenteFuncional/ComponenteFuncional";
import ComponentePersonas from "./componentes/ComponentePersonas/ComponentePersonas";
import Formulario from "./componentes/Formulario/Formulario";
import OtroComponente from "./componentes/OtroComponente/OtroComponente";
import Persona from "./componentes/Persona/Persona";
import PersonaFuncional from "./componentes/PersonaFuncional/PersonaFuncional";

import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      personas: [
        {
          nombre: "Elena",
          apellido: "De Troya",
          lugar: "Roma"
        },
        {
          nombre: "Juana",
          apellido: "De Arco",
          lugar: "Paris"
        },
        {
          nombre: "Pedro",
          apellido: "Páramo",
          lugar: "Comala"
        }
      ]
    }


  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <h1>¡Hola!</h1>
          <Link to="/" className="btn btn-success">Home</Link>
          <Link to="/formulario" className="btn btn-primary">Formulario</Link>
          <Link to="/personas" className="btn btn-warning">Personas</Link>
          <Link to="/componenteapi" className="btn btn-danger">API Dog</Link>
          <Switch>
            <Route path="/" exact render={() => {
                return(
                  <div>
                    <PersonaFuncional nombre="Cynthia" apellido="Castillo" lugar="Monterrey" />
                  </div>
                )
                
              }
            } />
            <Route path="/formulario" exact render={() => <Formulario />} />
            <Route path="/personas" render={(routerProps) => <ComponentePersonas {...routerProps} />} />
            <Route path="/personas/:palabra/:color" render={(routerProps) => <ComponentePersonas {...routerProps} />} />
            <Route path="/otrocomponente" render={() => {
              return (
                <OtroComponente>
                  <ul>
                    <li>Esta es una lista del elemento hijo</li>
                  </ul>
                  <p>
                    Este es otro elemento hijo
                  </p>
                  <Link className="btn btn-success" to="/">Regresar a Home</Link>
                </OtroComponente>
              )
            }} />
            <Route path="/componentefuncional" render={() => <ComponenteFuncional num={10} aumento={1} />} />
            <Route path="/componenteapi" render={()=><ComponenteAPI />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
