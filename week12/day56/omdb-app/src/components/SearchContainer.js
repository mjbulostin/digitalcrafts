import React, { useState, useEffect } from 'react';
import MovieCards from "./MovieCards";
// import { API } from "";

export default function SearchContainer() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [movieInfo, setMovieInfo] = useState([]);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    // useEffect(() => {
    //     getMovieDetails();
    // }, []);

    const getMovieDetails = async (moviesToParse) => {
        for (const movie of moviesToParse) {
            const getMovieDetails = await fetch (`http://www.omdbapi.com/?apikey=e97dd22f&i=${movie.imdbID}` 
            ); 
        const movieJson = await getMovieDetails.json();
        console.log(movieInfo);
        setMovieInfo([movieJson, ...movieInfo]);
    }
    };
    const fetchMovies = async () => {
        if (!searchTerm) {
            setError(true);
            setErrorMessage("Please enter a valid movie title");
            return;
        }
        const URL = "http://www.omdbapi.com/?apikey=e97dd22f&s=${searchTerm}"
        const requestBody = {
            headers: { Accept: "application/json" },
        };
        const movieData = await fetch(URL, requestBody);
        const movieDataParsed = await movieData.json();

        if (movieDataParsed.Response) {
            setError(false);
            setErrorMessage("");
            setMovies(movieDataParsed.Search);
            getMovieDetails(movieDataParsed.Search);
        } else {
            setError(true);
            setErrorMessage("Apologies for the inconvenience, but there was an error fetching the movies. Please try again!")
        }
    };
    return (
        <div className="movie-container-top">
            <div className="input-fields">
                <input
                type="text"
                onChange={(e) => setSearchTerm(e.target.value)}
                placehgolder={error ? errorMessage : "Search by movie title"}
                />
            <button onClick={getMovieDetails}>Search</button>
            </div>
            
            <div className="card-topmost-container">
                {movies.map((movie) => (
                    <MovieCards movie={movie} />
                ))}
            </div>
        </div>
    );
}
