import React, { useState, useEffect } from 'react';
import MovieContainer from "./MovieContainer";
import MovieCards from "./MovieCards";

export default function SearchContainer() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = async () => {
        const response = await fetch ("http://www.omdbapi.com/?i=tt3896198&apikey=e97dd22f&s=thor", {
        headers: { Accept: "application/json" },
        });
        const parsedData = await response.json();
        setMovies(parsedData.Search);
    }
         
    return (
        <div>
            <h1>Search your movie by title below:</h1>
            <ul>
                {MovieCards.map((movieFromCache) => ( <MovieCards Search={movieFromCache} setMovies={setMovies}  />
                )
                )}
            </ul>
            <input className="" type="text" placeholder="Please Enter a Movie Title"/>
            <button onClick={() => getMovies()}>Search</button>
            <button onClick={() => setMovies()}>Clear Movies</button>
            <MovieContainer />
            <MovieCards />
        </div>
    )
}
