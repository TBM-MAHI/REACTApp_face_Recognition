import React, { Component } from "react";
import facial_recognition from './facial_recognition.png';
import Tilt from "react-parallax-tilt";
class Logo extends Component {
  render() {
    return (
      <div>
        <Tilt
          className="ma0 ml5 pa3 h5 w5 br3 bg-light-pink shadow-2"
          glareEnable={true}
          glareMaxOpacity={0.8}
          glareColor="#ffffff"
          glarePosition="all"
          glareBorderRadius="20px"
        >
          <img
            className="flex justify-center items-center"
            src={facial_recognition}
            alt={`logo`}
          />
        </Tilt>
      </div>
    );
  }
}

export default Logo;
