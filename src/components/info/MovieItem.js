import React from "react";

const MovieItem = (props)=>{
    let uri =  'https://www.themoviedb.org/movie/' + props.movie.id + '?language=ko-KR';
    let imgUri = 'https://image.tmdb.org/t/p/w500' + props.movie.poster_path;

    return (
        <div>
            <a href={uri}>
                <img src={imgUri} alt={props.movie.title} />
                <p className="title">{props.movie.title}</p>
            </a>
        </div>
    )
};

export default MovieItem;