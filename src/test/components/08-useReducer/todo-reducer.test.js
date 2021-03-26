import { todoReducer } from '../../../components/08-useReducer/todoReducer'
import { demoTodos } from '../../fixture/demoTodos'

describe('Pruebas en el componente todo reducer', ()=> {

    
    test('debe de retornar el estado por defecto', ()=> {
        const state = todoReducer(  demoTodos, { });

        expect( state ).toEqual( demoTodos );
    });


    test('debe de agregar un TODO', ()=> {

        const newTodo = {
            id:3,
            desc: "Aprender Next.js",
            done: false
        }

        const action = {
            payload:newTodo ,
            type: 'add'
        }

         const state = todoReducer( demoTodos, action)
        // console.log( state );
        expect( state.length ).toBe(3);
        expect(  state  ).toEqual( [...demoTodos, newTodo]  )



    });


    test('Debe de eliminar una tarea', ()=> {

        const actions = {
            type: 'delete',
            payload: 1
        }

        const state = todoReducer( demoTodos, actions );

        expect( state.length ).toBe( 1);

    });

    test('Debe de hacer el TOGGLE del TODO', ()=> {

        const actions = {
            type: 'toggle',
            payload: 1
        }

        const state = todoReducer( demoTodos, actions );

        expect( state[0].done ).toBe( true );
        expect( state[1]  ).toEqual( demoTodos[1] )

    });


});