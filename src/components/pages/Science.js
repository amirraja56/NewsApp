import React from "react";
import NewsCard from "../card/NewsCard";
import Marquee from "react-fast-marquee";

const Science = () => {
    const data = "science";

    return (
        <>
            <div className="homeHead">
                <Marquee><h1 >Welcome to the Science world</h1></Marquee>
                <NewsCard data={data} />
            </div>

        </>
    )
}
export default Science;