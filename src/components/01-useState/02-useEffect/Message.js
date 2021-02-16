import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(()=> {
        console.log('Componente montado');
        return () => {
            console.log('Componente desmontado');
        }
    },[])


    return ( <div>
        <h3 className="alert alert-info" > Eres Genial!!! </h3> 
        </div>
    )
}