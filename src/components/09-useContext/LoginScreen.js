import React, { useContext } from 'react';
import { UserContex } from './UserContext';


export const LoginScreen = () => {
    // leer la referencia del context
    const {  setUser } = useContext( UserContex );


    //extraer el setUser
    // llamar la funcion setUser y settear la data el user 
    const user = {
        id: 123,
        name:'Juan'
    }
    // id y name
    return (
        <div>
           <h1> Login screen</h1>
           
           <button 
                className="btn btn-info btn-block"
                onClick={ () => setUser ( user  )  }
                >
                Enviar 
           </button>
        </div>
    )
}
