const { shallow } = require("enzyme");
import { demoTodos } from '../../../fixture/demoTodos'

import {TodoList}  from '../../../../components/08-useReducer/components/TodoList'

describe('Pruebas en el todoList', ()=> {
    
    // definimo como funciones
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow( <TodoList
                                todos={ demoTodos }
                                handleDelete
                                handleToggle
                            />);



    test('Debe de mostrar correctamente el componente', () => {
        expect( wrapper ).toMatchSnapshot();
    });


    test('Debe de tener 2 TodoListItem', ()=> {
        // no dejar espacios en blanco
        expect( wrapper.find('TodoListIem').length ).toBe(demoTodos.length )
    });


    test('Debe de tener 2 TodoListItem', ()=> {
        // no dejar espacios en blanco
        expect( wrapper.find('TodoListIem').length ).toBe(demoTodos.length )
        
        expect( wrapper.find('TodoListIem').at(0).prop('handleDelete')  ).toBe(true);

    });

})