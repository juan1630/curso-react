import React, { useEffect, useState } from 'react'

export const Message = () => {
    
    // cada que se ejecuta el useEffect se crea otro listener

    const [coords, setCoords] = useState({ x:0, y:0 });
    const { x, y } = coords;
    // el state siempre debe de ir por fuera de los callbacks

    useEffect(()=> {
        

        const mouseMove = ( e )=> {

            const coords = {  x:e.x, y:e.y };
            setCoords( coords );
        }

        window.addEventListener('mousemove', mouseMove )
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    },[])


    return ( <div>
        <h3 className="alert alert-info" > Eres Genial!!! </h3> 
        <p> X: { x } Y: {y}  </p>
        </div>
    )
}