import React from "react";
import { useEffect, useState } from "react";
// import {Link} from "react-router-dom";
import Loading from "../layouts/Loading";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Contents from "../layouts/Contents";
import WrapTitle from "../layouts/WrapTitle";
import ContInfo from "../info/ContInfo";
import MovieSearch from "../info/MovieSearch";
import MovieList from "../info/MovieList";
import gsap from "gsap";

require("dotenv").config();


function Script(){
    const [movies, setMovies] = useState([]);
    const start = ()=>{
        setTimeout(()=>{
            //loading-active 제거
            document.querySelector("#loading").classList.remove("loading-active");
            gsap.set(".wrap__title h2 strong", {opacity: 0, y: 100});
            gsap.set(".wrap__title h2 em", {opacity: 0, y: 100});
            gsap.set("#header", {top: "-100%"});
            gsap.set("#footer", {bottom: "-100%"});
            gsap.set(".youtube__cont", {opacity: 0});

            gsap.to(".wrap__title h2 strong", {duration: 0.4, opacity: 1, delay: 1, y: 0, ease: "power2.out"});
            gsap.to(".wrap__title h2 em", {duration: 0.4, opacity: 1, delay: 1.4, y: 0, ease: "power2.out"});
            gsap.to("#header", {duration: 0.4, top: 0, delay: 1.8, ease: "power1.out"});
            gsap.to("#footer", {duration: 0.4, bottom: 0, delay: 2, ease: "power1.out"});
            gsap.to(".youtube__cont", {duration: 0.4, opacity: 1, delay: 2.2});
        }, 2000);
    };

    

    const search = (query)=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&&language=ko-KR&page=1&include_adult=false&query=${query}`, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setMovies(data.results);
        })
        .catch(error => console.log('error', error));
    };

    useEffect(()=>{
        var requestOptions = {
        method: 'GET',
        redirect: 'follow'
        };

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=ko-KR&page=1`, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setMovies(data.results);
            start();
        })
        .catch(error => console.log('error', error));
    }, []);

    return (
        <div>
            <Loading />
            <Header />
            <Contents>
                <section id="youtubeCont">
                    <div className="container">
                        <WrapTitle text={["movie", 'search']} />
                        <div className="youtube__cont">
                            <MovieSearch onSearch={search} />
                            <div className="youtube">
                                <MovieList movies={movies} />
                            </div>
                        </div>
                    </div>
                </section>
                <ContInfo />
            </Contents>
            <Footer />
        </div>
    );
}

export default Script;