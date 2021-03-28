const { shallow } = require("enzyme");
const { TodoListIem } = require('../../../../components/08-useReducer/components/TodoListIem')
const { demoTodos } = require('../../../fixture/demoTodos')

describe('Pruebas en el componente TodoListItem', () => {


    const handleDelete = jest.fn();
     const handleToggle = jest.fn();   

    const wrapper = shallow( <TodoListIem 
                            todo={demoTodos[0] }
                            i={1}
                            handleDelete={ handleDelete }
                            handleToggle={ handleToggle }
                                /> )

    test('Debe de mostrarse correctamente', () => {

        // snapshot

        expect( wrapper ).toMatchSnapshot();

    });

    test('Deber de llamar la funcion delete', () => {
        wrapper.find('button').simulate('click');

        expect( handleDelete ).toHaveBeenCalledWith( demoTodos[0].id )
    });

    test('debe de mostrar el texto correctamente', ()=> {
     
        const p = wrapper.find('p');    

        console.log( p)

        expect( p.text().trim() ).toBe( `2 - ${demoTodos[0].desc}` )
    });

    test('Debe de tener la clase complete', ()=> {

        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow( <TodoListIem 
            todo={todo }
                /> )

            // console.log( wrapper.html() )
            expect( wrapper.find('p').hasClass('complete') ).toBe(false);
                // expect(  wrap  )

    });

})