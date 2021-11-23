import React from "react";
import MovieItem from "./MovieItem";

const MovieList = (props)=>{
    return (
        <>
            {props.movies.map((movie)=>(
                <MovieItem key={movie.id} movie={movie}/>
            ))}
        </>
    );
};

export default MovieList;