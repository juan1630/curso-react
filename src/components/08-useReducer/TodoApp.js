import React, { useReducer } from 'react';
import {todoReducer } from './todoReducer';

import './styles.css'


const initialstate = [{

    id:  new Date().getTime(),
    desc: 'Aprender React',
    done: false

}];



export const TodoApp = () => {  

    const [ todos, dispatch ] =  useReducer(todoReducer, initialstate);


    const handleOnSubmit = (e) => {
        
        console.log('submit');

        e.preventDefault();


        const newTodo = {
            id: new Date().getTime(),
            desc: "Nueva tarea",
            done: false
        }


        const action ={
            type:'add',
            payload:newTodo
        }

        // el dispatch ya sabe que funcion ejecutar
        dispatch( action );



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
                        <li  className="item-todo"  key={todo.id} >  { i +1 } - {todo.desc} 
                            <hr/>
                            <button className="btn btn-danger" > 

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
                        type="submit"
                        className="form-control"
                        name="desc"
                        placeholder="Comer..."
                        autoComplete="off"
                        />


                        <button className="btn btn-success btn-block" > Agregar </button>

                    </form>

                </div>

        </div>
            
           

        </div>
    )
}
