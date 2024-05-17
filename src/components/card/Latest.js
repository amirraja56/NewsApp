import React, { useState, useEffect } from "react";
import axios from "axios";
// import Blink from "react-blink-text"
const Latest = () => {
  const [user, setuser] = useState([]);

  const getUsers = async () => {
    const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${process.env.API_KEY}`)
    setuser(res.data.articles)
    // console.log(res.data.articles.url)
  }
  useEffect(() => {
    getUsers();
  }, [])
  return (
    <>
      <h2 className="blink">Latest news</h2>
      <div className="row m-0">
        {user.map((item) => {
          let { id, title, urlToImage, url, publishedAt } = item;
          return (
            <>
              <div className="card ">
                <div className="row g-0 ">
                  <div className="col-md-4 ">
                    <img src={urlToImage} className="img-fluid rounded-start" alt="loading" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-2 m-0">
                      <h5 className="card-title m-0 p-0">{item.title}</h5>
                      <p className="card-text "><small className="text-body-secondary">{publishedAt}</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </>)
        })}
      </div>
    </>
  )
}
export default Latest;