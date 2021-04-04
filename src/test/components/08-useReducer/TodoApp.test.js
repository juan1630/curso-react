import react from 'react';
import { mount, shallow } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp'
import { demoTodos} from '../../fixture/demoTodos'
import { act } from '@testing-library/react';



describe('pruebas en todoApp', () => {


    const wrapper = shallow(  <TodoApp/> );

    Storage.prototype.setItem = jest.fn( ()=> {} )


    test('Debe de mostrarse correctamente', ()=> {
        expect( wrapper ).toMatchSnapshot();
    });


    test('Debe de agregar un Todo ', () => {
        
        const wrapper = mount(<TodoApp/>);
        // se muestra ya rendirizado el componente

        act( ()=> {
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] )
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[1] )

        } );


        expect( wrapper.find('h1').text().trim() ).toBe('Todo App (      2 )')
        expect( localStorage.setItem ).toHaveBeenCalledTimes(2);

    })


    test('debe de llamar un TODO', () => {
        wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
        expect( wrapper.find('h1').text().trim() ).toBe('Todo App (  1 )')
    })
    
    
})
