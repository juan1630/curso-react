import React, { useEffect, useReducer } from 'react';
import {todoReducer } from './todoReducer';

import './styles.css'
import { useForm } from '../../hooks/useHook';

import { TodoList  } from './components/TodoList';
import { TodoAdd } from './components/TodoAdd';

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


 

    // se usa el useEffect para el localstorage 

    useEffect( () => {
        // cualquier cambio y se vuelve a ejecutar el efecto

        localStorage.setItem('todos', JSON.stringify( todos ));

    }, [ todos ]);


    
    const handleDelete = (  todoId ) => {
        
        // recibir el id 

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
    


    const handleAddTodo = (newTodo) => {

        // el dispatch ya sabe que funcion ejecutar
        dispatch( {
            type:'add',
            payload:newTodo
        } );

    }


    return (
        <div>
            <h1> Todo App (  {todos.length} ) </h1>
            <hr/>

        <div className="row"  >

                <div className="col-7" >

                    <h3>  Todos </h3>

                    <TodoList 
                    todos={ todos }
                    handleDelete={ handleDelete }
                    handleToggle={ handleToggle }
                    />


                </div>

                <div className="col-5" >
                  <TodoAdd  
                  handleAddTodo={ handleAddTodo }  />

                </div>

        </div>
            
           

        </div>
    )
}
