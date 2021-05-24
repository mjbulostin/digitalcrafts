import React, { useState, useEffect } from 'react';
import Jokes from "./Jokes";

export default function JokeContainer() {
    const [joke, setJoke] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        getDadJokes()
    });

    useEffect(() => {}, []);
    
    useEffect(() => {}, []);

    const getDadJokes = async () => {
        const response = await fetch("https://icanhazdadjoke.com");
        const json = await response.json();
        console.log(json);
    };
    
    return (
        <div>
           <h1>Jokes Container</h1> 
           <p>count is {count}</p>
           <button onClick={() => setCount = (count + 1)}>Add</button>
           <button onClick={() => setCount = (count - 1)}>Subtract</button>
           <Jokes />
        </div>
    )
}
