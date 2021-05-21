import React, { useState } from 'react'

export default function Greeter() {
    const [greet, setGreet] = useState("Mike")
        setGreet
    const handleChange = (event) => {

        setGreet(e.target.value)
    }
    return (
            <div>
                <h1>Welcome, {greet}</h1>
                <input type="text" onChange={(e)} />
                <Counter greet={gree} />
            </div>
        )
    }

