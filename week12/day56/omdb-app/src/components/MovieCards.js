import React from 'react'

export default function MovieCards(props) {
    return (
        <div className="Poster">
            <img src={props.image}/>
            <h3>{props.title}</h3>
        </div>
    )
}