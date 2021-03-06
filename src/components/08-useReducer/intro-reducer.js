

const initialState = [{
    id:1,
    todo:"Comprar pan",
    done: false
}];




// pirmer reducer, porque regresa un nuevo estado
const todoReducer = (  state = initialState, action  ) => {
    

    if( action?.type == 'agregar'  ){

        return  [ ...state, action.payload]
    }
    
    return state;

}

// no usar push cuando se tarabaja en react

let todos = todoReducer();


const newTodo = {
    id:2,
    todo:'Comprar leche',
    done: false
}


const action = {
    type:'agregar',
    payload: newTodo
}


todos = todoReducer( todos,  action );

console.log( todos );