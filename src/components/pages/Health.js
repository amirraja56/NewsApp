import React from "react";
import NewsCard from "../card/NewsCard";
import Marquee from "react-fast-marquee";

const Health=()=>{
const data="health";
    return(
        <>
<div className="homeHead">
<Marquee><h1>Welcome to the Health world</h1></Marquee>
<NewsCard data={data}/>
</div>
        </>
    )
}
export default Health;