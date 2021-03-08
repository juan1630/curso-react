import React, { useEffect, useReducer } from 'react';
import {todoReducer } from './todoReducer';

import './styles.css'
import { useForm } from '../../hooks/useHook';



const init = () => {
    // return[{

    //     id:  new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    
    // }];

    return JSON.parse(  localStorage.getItem('todos') ) || [];

}

export const TodoApp = () => {  
    

    const [ todos, dispatch ] =  useReducer(todoReducer, [] , init  );


  const [ { description}, handleInputChange, reset  ] =  useForm({
        
     description:''

    });


    // se usa el useEffect para el localstorage 

    useEffect( () => {
        // cualquier cambio y se vuelve a ejecutar el efecto

        localStorage.setItem('todos', JSON.stringify( todos ));

    }, [ todos ]);


    const handleDelete = (  todoId ) => {
        
        // recibir el id 

        console.log( todoId );

        // crear accion para borrarlo

        const actionDelete = {
            type:'delete',
            payload: todoId
        }

        // dispatch 

        dispatch( actionDelete )
    }


    const handleToggle = (idToggle) => {
        

        const actionToggle = {
            type:'toggle',
            payload: idToggle
        }


        dispatch( actionToggle )
    }

    const handleOnSubmit = (e) => {
        

        if( description.trim().length < 1 ){
            return;
        }

        e.preventDefault();


        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }


        const action ={
            type:'add',
            payload:newTodo
        }

        // el dispatch ya sabe que funcion ejecutar
        dispatch( action );

        // reseteamos el form 
        reset();



    }


    return (
        <div>
            <h1> Todo App (  {todos.length} ) </h1>
            <hr/>

        <div className="row"  >

                <div className="col-7" >

                    <h3>  Todos </h3>

                <ul className="todos-items" >
                {
                    todos.map( (todo, i) => (
                        
                        <li  onClick={ ()=> { handleToggle(todo.id) } } className={ `${todo.done && 'complete'} ` }  key={todo.id} >  { i +1 } - {todo.desc} 
                            <hr/>
                            <button 
                            
                            className="btn btn-danger"
                            onClick={ () => { handleDelete( todo.id ) } }
                            > 

                                Borrar
                            </button>
                        
                          </li>
                    ))
                }
            </ul>


                </div>

                <div className="col-5" >
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

                </div>

        </div>
            
           

        </div>
    )
}
