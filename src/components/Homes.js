import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function Homes() {
    const [movies, setMovies] = useState([]);
    const api_key = "9b702a6b89b0278738dab62417267c49";
    const main_url = "https://api.themoviedb.org/3";

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        const url = `${main_url}/movie/popular?api_key=${api_key}&language=en-US&page=1`;
        const response = await fetch(url);
        const data = await response.json();
        if (data.results) {
            setMovies(data.results);
        }
    };

    return (
        <div id="swiper">
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                spaceBetween={10}
                slidesPerView={3}
                loop={true}
            >
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <div className="movie-slide">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                alt={movie.title}
                                className="imgswiper"
                            />
                            <h3 className="textswiper">{movie.title}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Homes;
