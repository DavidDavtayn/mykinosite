import "./App.css";
import Header from "./components/Header";
import Homes from "./components/Homes";
import Kinobutton from "./components/Kinobutton";
import Kino from "./components/Kino";
import Footer from "./components/Footer";
import React, { useState } from "react";
function App() {
    const [genreId, setGenreId] = useState([]);

    const handleGenreChange = (genreId) => {
        setGenreId(genreId);
    };
    return (
        <div className="App">
            <Header />
            <Homes />
            <Kinobutton onChange={handleGenreChange} />
            <Kino genreId={genreId} />
            <Footer />
        </div>
    );
}

export default App;
