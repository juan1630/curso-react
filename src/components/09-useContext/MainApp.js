import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContex } from './UserContext'

export const MainApp = () => {

    
   const [user, setUser] = useState({});

    return (
         
        // Lo que enmarca a los componentes se puede utilizar en los demas componentes
            <UserContex.Provider value={{
                user,
                setUser
            }}  >
                <AppRouter/>

            </UserContex.Provider>
        
    )
}
