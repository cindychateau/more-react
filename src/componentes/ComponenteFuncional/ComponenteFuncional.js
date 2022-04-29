import "./ComponenteFuncional.css"
import React, {useState} from 'react';

const ComponenteFuncional = ({num, aumento: aumProp}) => {
    /*
     
    props = {
        num: 5,
        aumento: 2
    }
     */
    const [numero, setNumero] = useState(num); //useState() -> LISTA [Variable que enviamos, Funcion que modifica]
    
    const [aumento, setAumento] = useState(aumProp);

    const aumentaNumero = () => {
        setNumero(numero+aumento);
    }

    return(
        <div>
            <h1 className={numero <= 25 ? "text-warning":"text-danger"}>{numero}</h1> 
            {
                numero <= 25 ?
                    <button onClick={aumentaNumero} className={ numero % 2 == 0 ? "btn btn-primary" : "btn btn-danger" }>Aumenta</button> :
                    <p>Llegaste al número límite</p>
            }
        </div>
    )

}

export default ComponenteFuncional