import React from 'react';

import './counter.css'

export const CounterWithCustomHook = () => {
    return ( <>
        <h1> Counter with hook { 0} </h1>
          <hr/>
          <div className="buttons" >
              <button className="btn btn-primary" > +1 </button>
              <button  className="btn btn-danger" > -1  </button>

          </div>
        </>
    );
}