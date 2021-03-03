import React, { useState, useCallback } from 'react';
import { ShowIncrement  }  from './ShowIncrement';

// estilos
import '../02-useEffect/useEffect.css'

export const CallBackHook = () => {


   const [counter, setCounter] = useState(10);

//    const increment = () => {
//        setCounter( counter + 1 );
//    }
   // regresa una funcion memorizada o guardada en memoria

  const increment = useCallback( (num) => {
        setCounter(  c  => c + num );
       },
       [setCounter, counter]);

       // tambien se puede usar con el useEffect

    return (
        <div>
            <h1> Use callback Hook: { counter } </h1>
            <hr/>
            <ShowIncrement increment={ increment } />
        </div>
    )
}
