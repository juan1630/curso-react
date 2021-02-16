import React, { useEffect, useState } from 'react'
import { Message } from './Message'
import './useEffect.css';

export const SimpleForm = () => {

    // se crea el state del formulario

    const [ formState, setFormState ] = useState({
        name:'',
        email:''
    });

    const { name, email } = formState;

    const handleInputChange = ({ target }) => {
 
        setFormState({
            ...formState,
            [target.name]:target.value
        })
    }

    useEffect( () => {
        console.log('Hey!!!');
    }, []);

    useEffect( () => {
        console.log('form state');
    }, [formState]);

    useEffect( () => {
        console.log('email cambio')
    }, [ email ]);

    return ( 
    <>
        <h1> Use Effect </h1> 
        <hr/>
            <form  className="form" >  
                <div className="form-group">
                    <input type="text"
                     name="name"
                      id="name"
                      className="form-control"
                      autoComplete="off"
                      value={name}
                      placeholder="Agrega tu nombre"    
                      onChange={ handleInputChange }
                      />
                </div>

                <div className="form-group">
                    <input type="text"
                     name="email"
                      id="email"
                      className="form-control"
                      autoComplete="off"
                      value={email}
                      placeholder="email@gmail.com"    
                      onChange={ handleInputChange }
                      />
                </div>
                 { (name == '123') && <Message/> }
            </form>
        </>
    )
}