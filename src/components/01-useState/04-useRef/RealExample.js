import React, { useState } from 'react'
import '../02-useEffect/useEffect.css';
import {   MultiplaCustomHooks } from '../examples/MultiplaCustomHooks';


export const RealExample = () => {

   const [show, setShow] = useState(false);


    return (
        <div>
            <h1>  Real example ref  </h1>
            <hr/>

                { show &&  <MultiplaCustomHooks/> }

                <button  className="btn btn-primary"  onClick={ () => { 
                    setShow( !show ) 
                    
                    }}  >  Show/Hide </button>

        </div>
    )
}
