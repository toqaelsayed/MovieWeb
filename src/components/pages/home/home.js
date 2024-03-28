import React, { useEffect, useState } from "react";
import '../home/home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import MovieList from "../../movieList/movieList";


const Home =()=>{
const [popularMovies,setPopularMovies] = useState([])

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=6d2370906ee35317a0337e46201652c3')
        .then(result=>result.json())
        .then(data =>setPopularMovies(data.results))
    },[])
    return (
        <>
            <div className="poster">
                <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={false}
                >
                    {
                        popularMovies.map(movie => (
                            <Link style={{textDecorstion:"none",color:"white"}} to={`/movie/${movie.id}`}>
                           <div className="posteerImages">
                            <img src={`https://image.tmdb.org/t/p/original/${movie && movie.backdrop_path}`} />
                           </div>
                           <div className="posterImage__overlay">
                            <div className="posterImage__title">{movie? movie.original_title:""}</div>
                            <div className="posterImage__runtime">
                                {movie ? movie.release_date:""}
                            
                            <span className="posterImage__rating">
                                {movie ? movie.vote_average: ""}
                                <i className="fas fa-star"/>{" "}
                            </span>
                           </div>
                           <div className="posterImage__description">
                            {movie ?movie.overview :""}
                           </div>
                           </div>
                           </Link>
                        ))
                    }

                </Carousel>
                <MovieList/>
            </div>
        
        </>
    )
}
export default Home;