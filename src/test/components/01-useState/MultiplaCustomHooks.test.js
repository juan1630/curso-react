import React from 'react';
import { shallow } from 'enzyme';
import {  MultiplaCustomHooks } from '../../../components/01-useState/examples/MultiplaCustomHooks';
import { useFetch }from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

// nos deja generar cualquier data que se use
jest.mock('../../../hooks/useFetch');
jest.mock( '../../../hooks/useCounter');

describe('Pruebas en multiple cutom hooks', ()=> {

    // simula los valores de retorno
    useCounter.mockReturnValue({
        counter:10,
         increment: () =>{}
    });


    test('Debe de mostrarse correctamente',()=> {


        useFetch.mockReturnValue({
            data:null,
            loading: true,
            error:null
        });
        // hacemos el match con el compnente 

        const wrapper = shallow (<MultiplaCustomHooks/>);
        expect( wrapper ).toMatchSnapshot();

    });


    test('Debe de mostrar información', ()=>{

        
        useFetch.mockReturnValue({
            data:[{
                author: 'Juan Patrón',
                quote:'Hola mundo'
            }],
            loading: false,
            error:null
        });

        
        const wrapper = shallow (<MultiplaCustomHooks/>);
        
        // console.log( wrapper.html() );

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect( wrapper.find('.mx-9').text().trim() ).toBe('Hola mundo');
        expect( wrapper.find('.blockquote-footer').text().trim() ).toBe('Juan Patrón');

    expect( wrapper ).toMatchSnapshot();

    });

});