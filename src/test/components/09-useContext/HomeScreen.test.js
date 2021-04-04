const {  mount } = require("enzyme");
import React from 'react';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContex } from '../../../components/09-useContext/UserContext';


describe('Pruebas con el HomeScreen', () => {
    const user ={
        name:"Juan",
        email: "josejuan@gmail.com"
    }
    
    const wrapper = mount(  
        <UserContex.Provider  value={{
            user
        }}>

            <HomeScreen/>
        </UserContex.Provider>
        
        );
    
    test("Debe de mostrar el componente",() => {
        
        expect( wrapper ).toMatchSnapshot();
    })
})
