import React from "react";
import NewsCard from "../card/NewsCard";
import Marquee from "react-fast-marquee";
const Sports = () => {
    const data = "sports"
    return (
        <>
            <div className="homeHead">
                <Marquee><h1>Welcome to the Sports world</h1></Marquee>
                <NewsCard data={data} />
            </div>
        </>
    )
}
export default Sports;