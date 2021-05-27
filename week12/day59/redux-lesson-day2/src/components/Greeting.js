import React from 'react'
import { useSelector, useDispatch } from "react-redux";

export default function Greeting() {
    const dispatch = useDispatch();
    const fakeData = useSelector((state) => state.fakeData);
    return (
        <div>
            <h1>Hello Redux</h1>
            {fakeData.map(data => (
            <p>data.userName</p>
            ))}
            <button onClick={() => dispatch({type: "INSERT_OBJECT"})}>
            Change to Michelle
            </button>
        </div>
    )
}
