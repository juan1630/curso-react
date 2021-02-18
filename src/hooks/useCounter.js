import { useState } from 'react';



export const useCounter = (initalState = 10) => {

    const [counter, setCounter] = useState(initalState);

    const increment = () => {
        setCounter(counter => counter + 1);
    }

    const decrement = () => {
        setCounter(counter => counter - 1);
    }

    const reset = () => {
        setCounter(counter => counter = initalState);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}