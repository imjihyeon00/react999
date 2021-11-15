import React from "react";
import { useEffect, useState } from "react";
// import {Link} from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Contents from "../layouts/Contents";
import WrapTitle from "../layouts/WrapTitle";
import ContInfo from "../info/ContInfo";
import YoutubeList from "../info/YoutubeList";
import YoutubeSearch from "../info/YoutubeSearch";

require("dotenv").config();



function Youtube(){
    const [videos, setVideos] = useState([]);
    const start = ()=>{
        setTimeout(()=>{
            // alert("ddd");
        }, 2000);
    };

    

    const search = (query)=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&maxResults=30&type=video`, requestOptions)
        .then(response => response.json())
        .then(result => setVideos(result.items))
        .catch(error => console.log('error', error));
    };

    useEffect(()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=bts&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&maxResults=30&type=video`, requestOptions)
        .then(response => response.json())
        // .then(result => console.log(result.items))
        .then(result => {
            setVideos(result.items);
            start();
        })
        .catch(error => console.log('error', error));
    }, []);

    return (
        <div>
            <Header />
            <Contents>
                <section id="youtubeCont">
                    <div className="container">
                        <WrapTitle text={["youtube", 'reference']} />
                        <div className="youtube__cont">
                            <YoutubeSearch onSearch={search} />
                            <div className="youtube">
                                <YoutubeList videos={videos} />
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

export default Youtube;