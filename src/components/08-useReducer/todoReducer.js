


export  const todoReducer = ( state = [] , action ) => {

    switch (action.type) {



        case 'add':
            
            return [...state, action.payload];
        case 'delete':
            return state.filter(  todo => todo.id !== action.payload );  //id = 6684683124
        default:
            return state;
    }


    // definimos el tipo y si accion de acuerdo a su tipo


}