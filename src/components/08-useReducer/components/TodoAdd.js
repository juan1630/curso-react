import React from 'react';
import { useForm } from '../../../hooks/useHook'

export const TodoAdd = ({handleAddTodo}) => {

    const [ { description}, handleInputChange, reset  ] =  useForm({
        
        description:''
   
       });


       const handleOnSubmit = (e) =>{ 
            
        e.preventDefault();
        if( description.trim().length < 1 ){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }


        handleAddTodo( newTodo)
        // reseteamos el form 
        reset();

       
    }
   
    return (
        <>
             <h3 className="agregar" >
                        Agregar todo
                   </h3>


                   <hr/>

                    <form onSubmit={  handleOnSubmit }  >


                        <input 
                        type="text"
                        className="form-control"
                        name="description"
                        placeholder="Comer..."
                        autoComplete="off"
                        onChange={ handleInputChange }
                        value={ description }
                        />


                        <button className="btn btn-success btn-block" > Agregar </button>

                    </form>
        </>
    )
}
