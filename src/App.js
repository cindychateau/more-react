import React from "react";
import OtroComponente from "./componentes/OtroComponente/OtroComponente";
import Persona from "./componentes/Persona/Persona";

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <h1>Componente de Clase</h1>
        <Persona nombre="Elena" apellido="De Troya" lugar="Monterrey" />
        <Persona nombre="Juana" apellido="De Arco" lugar="Colombia" />
        <Persona nombre="Pedro" apellido="Páramo" lugar="Comala" />
        <OtroComponente>
          <ul>
            <li>Esta es una lista del elemento hijo</li>
          </ul>
          <p>
            Este es otro elemento hijo
          </p>
        </OtroComponente>
        <button className="btn btn-success" onClick={() => alert("Hiciste click!")}>Haz click aquí</button>
      </div>
    );
  }

}

export default App;
