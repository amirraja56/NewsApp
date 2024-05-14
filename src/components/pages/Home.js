import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import axios from "axios";


const Home = () => {

        const [data, setdata] = useState([]);
        const breakingNews = async () => {
                const res = await axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c13dc5ddc53b4ae7a1ea61c73031765e`)
                // console.log(res.data.articles)
                setdata(res.data.articles)
        }
        useEffect(() => {
                breakingNews();
        }, []);
        return (
                <>
                        <div className="m-0 p-0">
                                <Marquee><h2>Breaking News</h2></Marquee>
                                <div className="container-fluid m-0">
                                        <div className="row">
                                                {data.map((item) => {
                                                        let { title, content, description, url, urlToImage } = item;
                                                        return (<><div style={{ display: "flex", justifyContent: "center", marginTop: "5px" }} className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                <div className="card m-0 p-0" style={{ width: "18rem", height: "auto", marginBottom: "0" }} >
                                                                        <img src={urlToImage} className="card-img-top" alt="..." />
                                                                        <div className="card-body">

                                                                                <h5 className="card-title">{title}</h5>
                                                                                <p className="card-text">{content.slice(0, 200)}</p>
                                                                                <a href={url} target="blank" className="btn btn-primary w-100">know more</a>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        </>)
                                                })}
                                        </div>
                                </div>
                        </div>
                </>
        )
}
export default Home;