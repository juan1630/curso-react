import {  renderHook  } from "@testing-library/react-hooks";
import { useFetch } from '../../hooks/useFetch';


describe('pruebas en use fetch', ()=> {

    test('Debe de retornar la información por defecto', ()=> {
        
        const {result } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1') );

        console.log(  result);

        const { data, loading, error } = result.current;

        // evaluamos los valores por defecto
        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null)

    });

    test('debe de tener la info deseada',  async() => {

        const { result, waitForNextUpdate } = renderHook( ()=> useFetch('https://www.breakingbadapi.com/api/quotes/1') );

       // console.log(result);
          waitForNextUpdate();

       
       const { data, loading, error } = result.current;
       
        

        expect( data.length  ).toBe(1);
        expect( error ).toBe(null);
        expect(  loading ).toBe(false); 

    });


    test('Debe de manejar el error ' , ()=>{
            const { result, waitForNextUpdate } = renderHook( ()=> useFetch('https://reqres.in/apid/users?page=2') );

       // console.log(result);
          waitForNextUpdate();

       
       const { data, loading, error } = result.current;

       expect(data).toBe(null);
    });


});