import React, { useState } from "react";

function Kinobutton({ onSearch }) {
    const [searchText, setSearchText] = useState("");

    const genres = [
        { id: 28, name: "Action" },
        { id: 12, name: "Adventure" },
        { id: 16, name: "Animation" },
        { id: 35, name: "Comedy" },
        { id: 80, name: "Crime" },
        { id: 99, name: "Documentary" },
        { id: 18, name: "Drama" },
        { id: 10751, name: "Family" },
        { id: 14, name: "Fantasy" },
        { id: 36, name: "History" },
        { id: 27, name: "Horror" },
        { id: 10402, name: "Music" },
        { id: 9648, name: "Mystery" },
        { id: 10749, name: "Romance" },
        { id: 878, name: "Science Fiction" },
        { id: 10770, name: "TV Movie" },
        { id: 53, name: "Thriller" },
        { id: 10752, name: "War" },
        { id: 37, name: "Western" },
    ];

    const handleSearchInputChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleSearchClick = () => {
        if (onSearch) {
            onSearch(searchText);
        }
    };

    const handlegenreClick = (id) => {
        window.location.href = `/scriptinfo.html?id=${id}`;
    };

    return (
        <div id="kinobuttons">
            <div className="inbtn">
                <input
                    type="text"
                    value={searchText}
                    onChange={handleSearchInputChange}
                    placeholder="Search"
                />
                <button onClick={handleSearchClick}>Search</button>
            </div>
            <div id="genre-buttons">
                {genres.map((genre) => (
                    <button
                        key={genre.id}
                        className="genre-btn"
                        onClick={() => handlegenreClick(genre.id)}
                    >
                        {genre.name}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Kinobutton;
