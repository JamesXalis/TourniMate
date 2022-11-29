import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import'./home.css';
import Carousel from '../Carousel';

function Home() {
    return (
        <div className='Home'>
            <h1 className=' header d-flex justify-content-center'>TourniMate</h1>
        <div className='container d-flex just-content-around'>
            <div className='gif'>
            <img src='not_found.jpg'></img>
            </div>
        </div>
        <Carousel/>
        </div>
    )
}

export default Home;