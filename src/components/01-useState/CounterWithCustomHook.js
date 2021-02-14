import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css'

export const CounterWithCustomHook = () => {

    const { increment, decrement, state, reset } = useCounter();

    return ( <>
        <h1> Counter with hook { state } </h1> <hr/>
        <div className = "buttons">
        <button className = "btn btn-primary" onClick = { () =>  increment( 2) } > +1 </button> 
        <button className = "btn btn-info" onClick = {  reset  } >  Reset  </button> 
        <button className = "btn btn-danger"  onClick = { () =>  decrement( 2) } > -1 </button>

        </div>
         </>
    );
}