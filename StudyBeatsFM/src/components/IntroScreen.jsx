import React from "react";
import ReactPlayer from "react-player";
import "../styles/introScreen.css"
import logo from '../images/logo.jpeg'
import { Link } from 'react-router-dom';

const Hero = () => {
    return(
        <div>
        <div className="heroContainer">
          <div className="videoContainer2">
            <ReactPlayer
              className="react-player"
              url="//https://www.youtube.com/watch?v=ItIP2Jo4pRE"
              width="100%"
              height="100%"
              position="relative"
              overflow="hidden"
              playing={true}
              loop={true}
              muted={true}
            />
          </div>
        </div>
        <div className="titleContainer">
          <img className="heroLogo" src={logo} alt="" />
          <h1 className="tracking-in-expand-fwd">Xbeat Studio</h1>
          <h3 className="subTitle"> Reproductor Online Web y App <br/>Song: Electro House</h3>
          <div class="note-position-1 note-amination">&#9835;</div>
          <div class="note-position-2 note-amination animation-delay-2">
            &#9833;
          </div>
          <div className="bubbleContainer">
            <div className="bubble1"></div>
            <div className="bubble2"></div>
            <div className="bubble3"></div>
          </div>
          <div class="wrap">
            <Link to="/music">
                <button class="button">Iniciar </button>
            </Link>         
          </div>
        </div>
        <ReactPlayer 
              className="react-player"
              url="//https://www.youtube.com/watch?v=ItIP2Jo4pRE"
              width="0%"
              height="0%"
              position="absolute"
              top="10000px"
              left="1000px"
              overflow="hidden"
              playing={true}
              loop={true}
            />
      </div>
    )
}

export default Hero