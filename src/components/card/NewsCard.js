import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const NewsCard = (props) => {
  const [news, setnews] = useState([]);
  const navigate = useNavigate();

  const getnews = async () => {
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${props.data}&apiKey=c13dc5ddc53b4ae7a1ea61c73031765e`)
      // console.log(response.data.totalResults);
      const totalresult = response.data.totalResults;
      if (totalresult !== 0) {
        setnews(response.data.articles);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'incorrect information!',
        })
        navigate('*')
      }
    } catch (err) {
      console.log(err)
    }
  };
  useEffect(() => {
    getnews();
  }, []);


  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {news.map((items) => {
            let { title, description, url, urlToImage, publishedAt } = items;
            return (
              <>
                <div class="card " style={{ width: "18rem" }}>
                  <img src={urlToImage} class="card-img-top" alt="loading" />
                  <div class="card-body ">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                    <a href={url} class="btn btn-primary w-100">Go somewhere</a>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default NewsCard;