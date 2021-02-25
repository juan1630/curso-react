import React, { useState,useMemo } from 'react'
import { useCounter } from '../../../hooks/useCounter'

import '../../../components/01-useState/counter.css'
import { procesoPesado } from '../../../helpers/procesoPesado';


export const MemoHook = () => {

    const { counter, increment } = useCounter(20);
    const [show, setShow] = useState(true);
    
    // se muestra una version memorizada del counter
    const memoProcesoPesado =  useMemo( ()=> procesoPesado(counter), [counter])

    return ( <div>
        <h1> Memo Hook  </h1>
        <h3> <small>  { counter } </small> </h3>
        <button className = "btn btn-info"
        onClick = { increment } >
        +1 
        
        </button>


        <hr/>

        <p> { memoProcesoPesado } </p>
        <button className = 'btn btn-outline-danger ml-3'
        onClick = {
            () => {
                setShow(!show)
            }
        } >
        Show / hide { JSON.stringify(show) } 
        </button>

        </div>
    )
}