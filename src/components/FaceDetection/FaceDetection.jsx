import React, { Component } from 'react';

class FaceDetection extends Component {
    render() {
        let { imageURL } = this.props;
        return (
          <div className="centerFlex mt4">
            <img
                    src={`${imageURL}`}
                    id={"inputImg"}
              width={"600px"}
              height={"auto"}
              alt="pic"
            />
          </div>
        );
    }
}

export default FaceDetection;