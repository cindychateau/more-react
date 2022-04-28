import React from "react";
import ComponenteFuncional from "./componentes/ComponenteFuncional/ComponenteFuncional";
import Formulario from "./componentes/Formulario/Formulario";
import OtroComponente from "./componentes/OtroComponente/OtroComponente";
import Persona from "./componentes/Persona/Persona";
import PersonaFuncional from "./componentes/PersonaFuncional/PersonaFuncional";

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <Formulario />
        <h1>Componente de Clase</h1>
        <Persona nombre="Elena" apellido="De Troya" lugar="Monterrey" />
        <Persona nombre="Juana" apellido="De Arco" lugar="Colombia" />
        <Persona nombre="Pedro" apellido="Páramo" lugar="Comala" />
        <PersonaFuncional nombre="Cynthia" apellido="Castillo" lugar="Monterrey" />
        <OtroComponente>
          <ul>
            <li>Esta es una lista del elemento hijo</li>
          </ul>
          <p>
            Este es otro elemento hijo
          </p>
        </OtroComponente>
        <button className="btn btn-success" onClick={() => alert("Hiciste click!")}>Haz click aquí</button>
        <ComponenteFuncional num={5} aumento={2} />
      </div>
    );
  }

}

export default App;
