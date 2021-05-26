import React from 'react';
import { useSelector, useDispatch } from "react-redux";

export default function Counter(props) {
    const counter = useSelector((state) => state.counter);
    const userName = useSelector((state) => state.userName);
    const dog = useSelector ((state) => state.dog);


    const dispatch = useDispatch();
    return (
        <div>
            <h1>Dispatch Counter</h1>
            <p>{counter}</p>
            <p>{userName}</p>
            <p>{dog}</p>
            <button onClick={() => dispatch({ type: "ADD" })}>Add</button>
            <button onClick={() => dispatch({ type: "SUBTRACT" })}>Subtract</button>
            <button onClick={() => dispatch({ type: "CHANGE_DOG_TO_DUCK"})}>QUACK</button>
            <button onClick={() => dispatch({ type: "CHANGE_DUCK_TO_DOG"})}>BORK</button>
            {/* <p>{props.counter}</p>
            <button onClick={() => dispatch({ type: "ADD_COUNTER"})}>Add</button>
            <button onClick={() => dispatch({ type: "SUBTRACT_COUNTER"})}>Subtract</button> */}
        </div>
    )
}
