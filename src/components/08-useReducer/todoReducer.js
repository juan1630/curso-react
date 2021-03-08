


export  const todoReducer = ( state = [] , action ) => {

    switch (action.type) {



        case 'add':
            
            return [...state, action.payload];
        case 'delete':
            return state.filter(  todo => todo.id !== action.payload );  //id = 6684683124

        case 'toggle':
            return state.map( todo => {
                
                if(todo.id === action.payload ){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }else {
                    return todo;
                }
            } )
        
        default:
            return state;
    }


    // definimos el tipo y si accion de acuerdo a su tipo


}