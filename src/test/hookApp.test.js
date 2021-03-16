
import { shallow } from 'enzyme';
import {  HookApp} from '../hooksApp'
import React from 'react';

describe('Pruebas en HookApp', ()=> {

    test('Debe de mostrarse correctamente', () => {
        const wrapper = shallow(<HookApp/>);
        //hace match con el snashot
        expect( wrapper ).toMatchSnapshot();
    });
});