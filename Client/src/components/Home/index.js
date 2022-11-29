import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import'./home.css';
import CarouselContainer from '../Carousel';

function Home() {
    return (
        <div className='Home'>
            <h1 className=' header d-flex justify-content-center'>TourniMate</h1>
        <div className='container d-flex justify-content-between'>
            <div className='gif rounded'>
            <img src='not_found.jpg'></img>
            </div>
        <CarouselContainer/>
        </div>
        <footer>About Us</footer>
        </div>
        
    )
}

export default Home;