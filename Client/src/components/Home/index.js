import React from 'react';
<<<<<<< HEAD
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

function Home() {

=======
import 'bootstrap/dist/css/bootstrap.min.css';
import'./home.css';
import Carousel from '../Carousel';

function Home() {
    return (
        <div className='Home'>
            <h1 className=' header d-flex justify-content-center'>TourniMate</h1>
        <div className='container d-flex justify-content-between'>
            <div className='gif rounded'>
            <img src='not_found.jpg'></img>
            </div>
        <Carousel/>
        </div>
        <footer>About Us</footer>
        </div>
        
    )
>>>>>>> 93bf9f63890e92a4f8fda79fefaeb0fc9df440a0
}

export default Home;