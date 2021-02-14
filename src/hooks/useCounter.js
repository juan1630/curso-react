import { useState } from 'react';



export const useCounter = (initalState = 10) => {

    const [state, setState] = useState(initalState);

    const increment = (factor = 2) => {
        setState(state => state + factor);
    }

    const decrement = (factor = 2) => {
        setState(state => state - factor);
    }

    const reset = () => {
        setState(state => state = initalState);
    }

    return {
        state,
        increment,
        decrement,
        reset
    }
}