import React from 'react'

export default function Home() {
    functionToHandleTyping = async()=> {
        const data = await fetch(url)
        const json = await data.json()
        setData(json)
    }
    return (
        <div>
            <h1>Home</h1>
            <a href="/blog">blog</a>
            <input onChange={() => _.debounce(functionToHandleTyping, 3000)} type="text" />
        </div>
    )
}
