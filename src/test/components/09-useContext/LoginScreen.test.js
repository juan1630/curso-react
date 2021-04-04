import { shallow } from 'enzyme';
import React from 'react';
import {LoginScreen} from '../../../components/09-useContext/LoginScreen';
import { UserContex } from '../../../components/09-useContext/UserContext';

describe('Pruebas en el componente LoginScreen', () => {
    

    const setUser = jest.fn()

    const wrapper = shallow(
        <UserContex.Provider  value={{
            setUser
        }} >

            <LoginScreen/>
        </UserContex.Provider>
    )
    
    test('Debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe de ejecutar el setUser con el argumento esperado', ()=> {
       
        wrapper.find('button').prop('onClick')();

        expect( wrapper ).toHaveBeenNthCalledWith({
            
                id: 123,
                name:'Juan'
                    })
    });
    
})
