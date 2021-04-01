import React from 'react';
import {  shallow  } from 'enzyme';
import {  TodoAdd } from '../../../../components/08-useReducer/components/TodoAdd'

describe('Pruebas en el componente TODOADD', ()=> {

    const handleAddTodo = jest.fn();

    const wrapper = shallow( <TodoAdd 
            handleAddTodo={ handleAddTodo }

            /> )

    test('Debe de mostrarse correctamente', () => {

        expect(  wrapper).toMatchSnapshot();

    });

    test('No debe de llamr al TODO', ()=> {

        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({ preventDefault () {} });

        expect( handleAddTodo ).toHaveBeenCalledTimes(0);
        // esperamos que se haya llamado 0 veces la funcion

    });

    test('debe de llamar la funcion handleAddTodo', () => {
            
            const value = 'Aprender react';
            
            wrapper.find('input').simulate('change', {
                target: {
                    value,
                    name: 'description'
                }
                // etse name es del elemento html
            })

            const formSubmit = wrapper.find('form').prop('onSubmit');

            formSubmit({  preventDefault(){} });
            
            expect( handleAddTodo ).toHaveBeenCalledTimes( 1 );
            expect( handleAddTodo ).toHaveBeenCalledWith( expect.any(Object ) );
            expect( handleAddTodo ).toHaveBeenCalledWith({
                desc: value,
                done: false,
                id: expect.any(Number)
            });

            expect( wrapper.find('input').prop('value') ).toBe('')
    })
    

});