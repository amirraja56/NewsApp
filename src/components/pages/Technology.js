import React from "react";
import NewsCard from "../card/NewsCard";

const Technology = () => {
    const data = "technology";
    return (
        <>
            <div className="homeHead" defaultValue="technology" >
                <h1 className="blink">Welcome to the Technology world</h1>
                <NewsCard data={data} />
            </div>

        </>
    )
}
export default Technology;