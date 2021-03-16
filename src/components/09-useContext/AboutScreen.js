import React, { useContext } from 'react'
import { UserContex } from './UserContext'

export const AboutScreen = () => {

  const { user, setUser } =  useContext( UserContex );

  const handleClick = () => {
      // el context hace el redibujo de los componentes
    setUser({});
  }

    return (
        <div>
             <h1> about screen</h1>
             { user.name }
             <hr/>
             <pre>
                 { JSON.stringify(user, null, 3)}
             </pre>


             <button  className="btn btn-warning btn-block" 
                onClick={ handleClick }
             >
                    Log out
             </button>
        </div>
    )
}
