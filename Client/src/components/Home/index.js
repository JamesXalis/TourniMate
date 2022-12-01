import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import CarouselContainer from "../Carousel";
import logo from "../../images/logo.jpg";

function Home() {
  return (
    <div className="Home">
      <h1 className=" header d-flex justify-content-center">TourniMate</h1>
      <div className="container">
      <div className="row justify-content-around">
        <img className="col-4" src={logo}></img>
        <div className="col-4"><CarouselContainer/></div>
      </div>
      </div>
      
      <div className=" footer fixed-bottom">
        <div className="creator d-flex justify-content-center ">
          The Creators
        </div>
        <div className="row text-center">
          <a
            href="https://github.com/Pogga1"
            target="_blank"
            className="col-2 "
          >
            Andrew Eysoldt
          </a>
          <a
            href="https://github.com/bmaggiano"
            target="_blank"
            className="col-2 "
          >
            Brandon Maggiano
          </a>
          <a
            href="https://github.com/JamesXalis"
            target="_blank"
            className="col-2"
          >
            James Xalis
          </a>
          <a
            href="https://github.com/Dustinm5Oly"
            target="_blank"
            className="col-2 "
          >
            Dustin Moore
          </a>
          <a
            href="https://github.com/brittnicole207"
            target="_blank"
            className="col-2 "
          >
            Brittany Blalock
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
