import React from 'react';
import { TodoListIem } from './TodoListIem'

export const TodoList = ( { todos = [] , handleDelete, handleToggle} ) => {

    console.log( todos );
    
    return (

               <ul className="todos-items" >
                {
                    todos.map( (todo, i) => (
                        
                        <TodoListIem 
                        key={ todo.id }
                        todo={ todo} 
                         i={ i }   
                        handleDelete ={handleDelete} 
                        handleToggle={handleToggle} />
                       
                    ))
                }
            </ul>
    )
}
