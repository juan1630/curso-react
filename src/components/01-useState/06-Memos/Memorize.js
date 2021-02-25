import React, { useState } from 'react'
import { useCounter } from '../../../hooks/useCounter'
import '../../../components/01-useState/counter.css'
import { Small } from './Small';

export const Memorize = () => {

    const { counter, increment } = useCounter(10);
    const [show, setShow] = useState(true);
    
    return ( <div>
        <h1> <Small value={ counter } /> </h1> 

        <button className="btn btn-info"  onClick={  increment }  > 
            +1     
        </button>

        <button   className='btn btn-outline-danger ml-3' onClick={ ()=> {
             setShow( !show )
        } }  >
            Show/hide {  JSON.stringify( show ) }
        </button>
        
        </div>
    )
}