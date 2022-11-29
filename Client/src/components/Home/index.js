import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import'./home.css';
import CarouselContainer from '../Carousel';

function Home() {
    return (
        <div className='Home'>
            <h1 className=' header d-flex justify-content-center'>TourniMate</h1>
        <div className='container d-flex justify-content-around'>
            <div className='gif'>
            <img src='not_found.jpg'></img>
            </div>
        <CarouselContainer/>
        </div>
        </div>
    )
}

export default Home;