import React from 'react';
import { useCounter } from '../../../hooks/useCounter';
import { useFetch } from '../../../hooks/useFetch';
import '../02-useEffect/useEffect.css';

export const MultiplaCustomHooks = () => {

    const { counter, increment } = useCounter(1);


   const { loading, data } = useFetch(  `https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { author, quote } = !!data && data[0];



    return ( 
    <div>
        <h1> Breaking Bad Quotes!!!!  </h1> 
        <hr/>
        {
            loading 
            ?
            (<div className="alert alert-info text-center">
                Loading...
             </div>
            )
            :
            (
                <blockquote  className="blockquote text-right  ml-3 " >
                <p className="ml-3 mx-9" > 
                    {  quote}
                </p>
                <footer  className="blockquote-footer" >  
                    { author }
                </footer>
            </blockquote>
            )
        }

        <button className="btn btn-primary"  onClick={ increment } > 
            Más frases 
        
        </button>
           

    </div>
    )
}


//