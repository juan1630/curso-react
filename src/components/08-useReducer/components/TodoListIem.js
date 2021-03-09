import React from 'react'


export const TodoListIem = ({ todo, i, handleDelete, handleToggle }) => {
    // console.log(todo, i, handleDelete, handleToggle )
    return (
        <div>
             <li  onClick={ ()=> { handleToggle(todo.id) } } className={ `${todo.done && 'complete'} ` }  key={todo.id} >  { i +1 } - {todo.desc} 
                            <hr/>
                            <button 
                            
                            className="btn btn-danger"
                            onClick={ () => { handleDelete( todo.id ) } }
                            > 

                                Borrar
                            </button>
                        
                          </li>
        </div>
    )
}
