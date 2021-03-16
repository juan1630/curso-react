
import {  renderHook, act} from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter'

describe('Pruebas en el use counter', () => {
    test('Debe de retornar valores por defecto', () => {
        
        const { result  } = renderHook( () =>  useCounter( ));
        // console.log( result.current );

        expect( result.current.counter ).toBe(10);
        expect(  typeof result.current.increment ).toBe('function');
        expect(  typeof result.current.decrement ).toBe('function');
        expect(  typeof result.current.reset ).toBe('function');

    });

    test('Debe de retornar tener el counter en 100', () => {

        const { result  } = renderHook( () =>  useCounter(100 ));
        expect( result.current.counter ).toBe(100);
    });


    test('Debe de incrementar el counter en 1', ()=> {
        
        const { result  } = renderHook( () =>  useCounter(100));

        const { increment } = result.current;

        act( () => {
            increment();
        });

        const { counter } = result.current;
        expect( counter ).toBe(101);

    });

    test('Debe de  hacer el decremnet de 100', () => {
        const { result  } = renderHook( ()=> useCounter(100) );
        const {  decrement } = result.current;

        act( ()=> {

            decrement();
            // decrement();
            // no se puede ejecutar 2 veces la funcion
        });
        const {  counter } = result.current;
        // console.log( counter )
        expect( counter ).toBe( 99 );
    });

    test('Debe de regresa a 100 el counter', () => {
         const {  result } = renderHook( () => useCounter( 100 ) );
         const {  reset, increment } = result.current;

         act( () => {
            increment();
            reset();
         });

         const { counter } = result.current;
         expect( counter ).toBe(100);

    });

});
