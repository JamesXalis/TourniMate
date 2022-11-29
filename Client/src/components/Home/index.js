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
        <div className="links-container fixed-bottom">
      <h1 className="d-flex justify-content-center my-1 ml-5">About Us</h1>
      <div className="d-flex justify-content-between my-1">
        <div className="">
          <img className="p-2 rounded-full h-56" src="assets\images\andreweysoldt.jpg" alt=""></img>
          <h3 className='mx-3'>Andrew Eysoldt</h3>
          <a href="https://github.com/Pogga1" target="_blank"
            className="d-flex justify-content-center">Github Link</a>
        </div>
        <div className="">
          <img className="p-2 rounded-full h-56" src="./assets/images/brandon.jpg" alt=""></img>
          <h3 className='mx-3'>Brandon Maggiano</h3>
          <a href="https://github.com/bmaggiano" target="_blank"
            className="d-flex justify-content-center">Github Link</a>
        </div>
        <div className="">
          <img className="p-2 rounded-full h-56 w-56" src="assets\images\danielvalean.jpg" alt=""></img>
          <h3 className='mx-3'>James Xalis</h3>
          <a href="https://github.com/JamesXalis" target="_blank"
            className="d-flex justify-content-center">Github Link</a>
        </div>
        <div className="">
          <img className="p-2 rounded-full h-56 w-56" src="./assets/images/dustin.jpeg" alt=""></img>
          <h3 className='mx-3'>Dustin Moore</h3>
          <a href="https://github.com/Dustinm5Oly" target="_blank"
            className="d-flex justify-content-center">Github Link</a>
        </div>
        <div className="">
          <img className="p-2 rounded-full h-56 w-56" src="./assets/images/miguel.jpg" alt=""></img>
          <h3 className='mx-3'>Brittany Blalock</h3>
          <a href="https://github.com/brittnicole207" target="_blank"
            className="d-flex justify-content-center">Github Link</a>
        </div>
      </div>
    </div>
      </div>

        
    )
}

export default Home;