import React, { useContext } from 'react'
import { UserContex } from './UserContext'

export const HomeScreen = () => {

    const  { user} = useContext(  UserContex );
    // acceso al usuario 
    console.log( user )
    return (
        <div>

            <h1> Home screen</h1>
            <hr/>
            { user.id  }
            { user.name  }
        </div>
    )
}
