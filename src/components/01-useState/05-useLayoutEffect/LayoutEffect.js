import React, {useLayoutEffect, useRef, useState} from 'react';
import { useCounter } from '../../../hooks/useCounter';
import { useFetch } from '../../../hooks/useFetch';
import '../02-useEffect/useEffect.css';
import './layout.css';

export const Layout = () => {



    const { counter, increment } = useCounter(1);

   const {  data } = useFetch(  `https://www.breakingbadapi.com/api/quotes/${counter}`);
   const pTag = useRef();

    const {  quote } = !!data && data[0];

    const [boxSize, setboxSize] = useState({});

    useLayoutEffect(() => {
       setboxSize(  pTag.current.getBoundingClientRect() );
    }, [quote])


    return ( 
    <div>
        <h1> Breaking Bad Quotes!!!!  </h1> 
        <hr/>
            
                <blockquote  className="blockquote text-right  ml-3 " >
                <p className="ml-3"
                    ref={  pTag}
                > 
                    {  quote}
                </p>

                <pre> {  JSON.stringify( boxSize,null,  3 ) }  </pre>

            </blockquote>
            
        

        <button className="btn btn-primary"  onClick={ increment } > 
            Más frases 
        
        </button>
           

    </div>
    )
}


//