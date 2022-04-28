import React, {useState} from 'react';

const PersonaFuncional = ({nombre, apellido, lugar}) => {

    // const [state, setState] = useState({
    //     edoCivil: "Soltero",
    //     edad: 30
    // })
    const [edoCivil, setEdoCivil] = useState("Soltero");

    const cambiarEdoCivil = () => {
        // if(state.edoCivil === "Soltero"){
        //     setState({edoCivil: "Casado"});
        // } else {
        //     setState({edoCivil: "Soltero"});
        // }
        if(edoCivil === "Soltero"){
            setEdoCivil("Casado");
        } else {
            setEdoCivil("Soltero");
        }
    }

    return (
        <div className="card">
            <h4>Componente Funcional</h4>
            <h2>{nombre} {apellido}</h2>
            <p id="lugar">{lugar}</p>
            <p>Edo Civil: {edoCivil}</p>
            <button className="btn btn-warning" onClick={cambiarEdoCivil}>Botón Persona</button>
            <button className="btn btn-danger">Botón Persona</button>
        </div>
    )
}

export default PersonaFuncional;