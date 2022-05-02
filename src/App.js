import React from "react";
import ComponenteAPI from "./componentes/ComponenteAPI/ComponenteAPI";
import ComponenteFuncional from "./componentes/ComponenteFuncional/ComponenteFuncional";
import Formulario from "./componentes/Formulario/Formulario";
import OtroComponente from "./componentes/OtroComponente/OtroComponente";
import Persona from "./componentes/Persona/Persona";
import PersonaFuncional from "./componentes/PersonaFuncional/PersonaFuncional";

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
        <Formulario />
        <h1>Componente de Clase</h1>

        {

          this.state.personas.map( persona => {
            return (
              <Persona nombre={persona.nombre} apellido={persona.apellido} lugar={persona.lugar} />
            )
          })

        }

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
        <ComponenteFuncional num={10} aumento={1} />
        <ComponenteAPI />
      </div>
    );
  }

}

export default App;
