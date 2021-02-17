import React from 'react'
import { useForm } from '../../../hooks/useHook';
import './useEffect.css';

export const FormWithCustomHook = () => {

    // se crea el state del formulario

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password:''
    });

    const { name, email, password } = formValues;


    const handleSubmit = (e) => {
        console.log( formValues );
        e.preventDefault();
    }


    return ( 
    <>
        <h1> Use Effect </h1>  
        <hr/>
        
        <form className = "form"  onSubmit={handleSubmit} >
            <div className = "form-group" >
                <input type = "text"
                name = "name"
                id = "name"
                className = "form-control"
                autoComplete = "off"
                value = { name }
                placeholder = "Agrega tu nombre"
                onChange = { handleInputChange }/> 
        </div >

        <div className = "form-group" >
            <input type = "text"
            name = "email"
            id = "email"
            className = "form-control"
            autoComplete = "off"
            value = { email }
            placeholder = "email@gmail.com"
            onChange = { handleInputChange }
            /> 
            
        </div>  

        <div className = "form-group" >
            <input type = "password"
            name = "password"
            autoComplete="off"
            className = "form-control"
            value = { password }
            placeholder = "*************"
            onChange = { handleInputChange }
            /> 
            
        </div> 
        <button type="submit" className="btn btn-primary" >
            Guardar
        </button>
        </form>
         </>
    )
}