import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel';

const Hero = () => {

    const [data, setData] = useState('');

    const fetchData = async () => {
        await axios.get(
            "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=bb139faf56f94249b75914adceb691b7"
        ).then((res) => setData(res.data.articles))
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <>
            <Carousel variant='dark' interval={2000}>
                {data ? data.map((items, index) => (
                    <Carousel.Item>
                        <div className='d-flex justify-content-center align-items-center' style={{width: '100%', height: '450px', objectFit: "cover", backgroud:"#fff"}}>
                            <img
                                className="d-block img-fluid"
                                src={items.urlToImage}
                                alt="First slide"
                            />
                        </div>
                        <Carousel.Caption style={{backgroundColor:"#eb3349", color:"#FFF"}} >
                            <h3>{items.title}</h3>
                            <p>{items.description}</p>
                            <a href={items.url} target='blank' style={{color:"#FFF",textDecoration:"none"}} >View more</a>
                        </Carousel.Caption>
                    </Carousel.Item>
                )) : 
                <div className='d-flex justify-content-center align-items-center' style={{width: '100%', height: '400px', objectFit: "cover", backgroudColor:"#fff"}}>
                    Loading...
                </div>}
            </Carousel>
        </>


        // <div className='container-fluid bg-dark text-light d-flex flex-column justify-content-center align-items-center' style={{ height: '50vh'}}>
        //     <h3>rectiveNews</h3>
        //     <h5>News at Another Perspective.</h5>
        // </div>
    )
}

export default Hero