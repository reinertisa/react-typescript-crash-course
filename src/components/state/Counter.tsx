import {useReducer} from 'react';


type CounterState = {
    count: number
}

type CounterAction = {
    type: string,
    payload: number
}

const initialState = {
    count: 0,
};

function reducer(state: CounterState, action: CounterAction) {
    switch(action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            return state;
    }
}

export default function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({type: 'increment', payload: 10})}>
                Increment 10
            </button>
            <button onClick={() => dispatch({type: 'decrement', payload: 10})}>
                Decrement 10
            </button>
        </>
    )
}