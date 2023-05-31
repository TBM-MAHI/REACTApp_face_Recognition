import React, { Component } from "react";
import "./faceDetection.css";
class FaceDetection extends Component {
  render() {
    let { imageURL, boxes } = this.props;
    let faceBoxes = Object.keys(boxes);

    //console.log(faceBoxes);
    return (
      <div className="centerFlex mt4 mb4">
        <div className="relative br3 ba pa3 b--green">
          <img src={`${imageURL}`} id={"inputImg"} alt="" />
          {faceBoxes.map((fb, index) => {
            //console.log(boxes[fb].topRow);
            return (
              <div
                key={index}
                className="bounding-box"
                style={{
                  top: `${boxes[fb].topRow}px`,
                  bottom: `${boxes[fb].bottomRow}px`,
                  left: `${boxes[fb].leftCol}px`,
                  right: `${boxes[fb].rightCol}px`,
                }}
              ></div>
            );
          })}
        </div>
      </div>
    );
  }
}
  
export default FaceDetection;
