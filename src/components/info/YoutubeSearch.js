import React from "react";
import {useRef} from "react";

const YoutubeSearch = ({onSearch})=>{
    const inputRef = useRef();
    const handleSearch = ()=>{
        const value = inputRef.current.value;
        // console.log(value);
        onSearch(value);
    };
    const onClick = (e) => {
        e.preventDefault();
        handleSearch();
    };
    const onKeyPress = (e)=>{
        // e.preventDefault();
        if(e.key === "Enter"){
            handleSearch();
        }
    };

    return (
        <div className="search">
            <label htmlFor="youtubeInput" className="sr-only">검색하기</label>
            <input ref={inputRef} id="youtubeInput" type="search" placeholder="검색하기" onKeyPress={onKeyPress}/>
            <button type="submit" onClick={onClick}>검색</button>
        </div>
    );
};

export default YoutubeSearch;