import React, { useRef } from 'react'
import '../02-useEffect/useEffect.css';

export const FocusScreen = () => {

    const inputRef = useRef();
    // se puede modificar el ref

    const nandleClick = ()=> {
        // hace la referencia al input como el viewChild
        inputRef.current.select();  
        // hook use ref, es para referencia mutable
        console.log( inputRef );
        // se le puede dar el seguimiento a objetos, valores, etc.
        
    }
    return (
        <div>
            <h1> Focus Screen  </h1>
            <hr/>

            <input ref={   inputRef  } type="text"  className="form-control" placeholder="Nombre..." />

            <button  className="btn btn-primary mt-4" onClick={ nandleClick } >  Focus! </button>
        </div>
    )
}
