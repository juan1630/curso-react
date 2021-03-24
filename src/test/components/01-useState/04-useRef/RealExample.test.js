import { shallow } from 'enzyme';
import React from 'react';
import { RealExample } from '../../../../components/01-useState/04-useRef/RealExample';


describe('pruebas en el componente realExample', () => {

    const wrapper = shallow( <RealExample /> )

    test('Debe de mostrar correctamente el componente', () => {
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('MultiplaCustomHooks').exists() ).toBe(false)
    })

    test('Debe de validar el componente <MultiplaCustomHooks/>', ()=> {

        wrapper.find('button').simulate('click');
        expect( wrapper.find('MultiplaCustomHooks').exists() ).toBe(true);

    });

});