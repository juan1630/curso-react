


export  const todoReducer = ( state = [] , action ) => {

    switch (action.type) {



        case 'add':
            
            return [...state, action.payload];
    
        default:
            return state;
    }


    // definimos el tipo y si accion de acuerdo a su tipo


}