import React, { useState, useEffect } from "react";

const Kino = ({ genreId }) => {
    const [movies, setMovies] = useState([]);
    const api_key = "9b702a6b89b0278738dab62417267c49";
    const main_url = "https://api.themoviedb.org/3";

    useEffect(() => {
        if (genreId) {
            fetchMovies(genreId);
        }
    }, [genreId]);

    const fetchMovies = async (genreId) => {
        const genreUrl = `${main_url}/discover/movie?with_genres=${genreId}&sort_by=popularity.desc&api_key=${api_key}`;
        try {
            const response = await fetch(genreUrl);
            const data = await response.json();

            if (data.results && data.results.length > 0) {
                setMovies(data.results);
            } else {
                setMovies([]);
            }
        } catch (error) {
            console.error("Error", error);
        }
    };

    const handleMovieClick = (id) => {
        window.location.href = `/movie/${id}`;
    };

    let content;

    if (movies.length > 0) {
        content = movies.map((movie) => (
            <div className="movie_item" key={movie.id}>
                <div
                    className="movie_img"
                    onClick={() => handleMovieClick(movie.id)}
                >
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                    />
                </div>
                <div className="movie_info">
                    <h2 className="movie_title">{movie.title}</h2>
                    <p className="rating">
                        Rating: {Math.floor(movie.vote_average)}
                    </p>
                </div>
            </div>
        ));
    }

    return (
        <div id="kino">
            <div className="movie_cont">{content}</div>
        </div>
    );
};

export default Kino;
