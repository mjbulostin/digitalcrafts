import React, { useState } from 'react'
import Movie from './MovieCards'
import API_KEY from '../Secret';

export default function MovieContainer() {
    const [movies, setMovies] = useState([]);
    const [userInput, setUserInput] = useState("");
    const API = API_KEY

    const getMovies = async () => {
        const response = await fetch(`http://www.omdbapi.com/?s=${userInput}&apikey=${API}`, {
            headers: { Accept: "application/json"},
        })
        const parsedData = await response.json();
        setMovies(parsedData.Search)
    }
    return (
        <div className="MovieContainer">
            <h1>Movie Search</h1>
            <input type="text" value={userInput} placeholder="Enter a movie title" onChange={(e) => setUserInput(e.target.value)}/>
            <button onClick={() => getMovies()}>Submit</button>
            <div className="SecondContainer">
                {movies.map(movie=> <Movie title={movie.Title} image={movie.Poster}/>)}
            </div>           
        </div>
    )
}