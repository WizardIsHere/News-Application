import React, { useEffect, useState } from 'react'
import axios from 'axios'

import styles from './News.module.css'
import NavBar from '../NavBar/NavBar';


const News = ({ cat }) => {

  const [data, setData] = useState('');

  const fetchData = async () => {
    await axios.get(cat
      ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=bb139faf56f94249b75914adceb691b7`
      : "https://newsapi.org/v2/top-headlines?country=in&apiKey=bb139faf56f94249b75914adceb691b7"
    ).then((res) => setData(res.data.articles))
  }

  useEffect(() => {
    fetchData();
  }, [cat]);

  return (
    <>
      <NavBar />
      <div className='container my-4'>
        <div className='d-flex  align-items-center p-2'>
          <h3>Top Headlines</h3>
          {cat ? ">" : " "}
          <p className='my-1 p-2' style={{ textTransform: "uppercase" }}>{cat}</p>
        </div>
        <hr />
        <div className='container my=2 d-flex justify-content-center align-items-center flex-column' style={{ minHeight: "100vh" }}>
          {data ? data.map((items, index) => (
            <>
              <div className='container my-3 p-3' style={{ width: "800px", boxShadow: "2px 2px 10px silver", backgroundColor: "#FFF", borderRadius: "12px" }}>
                <h5 className='my-2'>{items.title}</h5>
                <div className='d-flex justify-content-center align-items-center'>
                  <img src={items.urlToImage} alt='image not found 😔' className='img-fluid ' style={{ width: '100%', height: '380px', objectFit: "cover" }} />
                </div>
                <p className='my-1'>{items.content}</p>
                <a href={items.url} target='blank'>View more</a>
              </div>
            </>
          )) : "Loading..."}
        </div>
      </div>
    </>
  )
}

export default News;