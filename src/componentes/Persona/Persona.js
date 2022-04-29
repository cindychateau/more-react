import React from "react";

class Persona extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            edoCivil: ""
        }
    }

    hizoClick = () => {
        alert("Hizo click en Persona");
    }

    hizoClick2 = (nombre) => {
        alert("Hizo click en "+nombre);
    }

    cambiarEdoCivil = () => {
        if(this.state.edoCivil === "") {
            this.setState({edoCivil: "Soltero"});
        } else if(this.state.edoCivil ==="Soltero"){
            this.setState({edoCivil: "Casado"})
        }else {
            this.setState({edoCivil: "Soltero"});
        }
    }

    render() {
        const {nombre, apellido, lugar} = this.props;

        return (
            <div className="card">
                <h2>{nombre} {apellido}</h2>
                <p id="lugar">{lugar} {lugar === "Paris" ? "Oh lala!" : "Wow!"}</p>
                <p>Edo Civil: {this.state.edoCivil}</p>
                <button className="btn btn-warning" onClick={this.cambiarEdoCivil}>Botón Persona</button>
                <button className="btn btn-danger" onClick={(e)=>this.hizoClick2(nombre)}>Botón Persona</button>
            </div>
        )
    }

    /**
     * MONTAJE
     * constructor()
     * render()
     * componentDidMount()
     * 
     * ACTUALIZACION
     * shouldComponentUpdate()
     * render() 
     * componentDidUpdate()
     * 
     * DESMONTAJE
     * componentWillUnmount()
     * 
     */

}

export default Persona;