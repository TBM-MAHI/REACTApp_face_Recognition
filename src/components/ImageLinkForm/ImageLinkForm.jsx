import React, { Component } from "react";
import './imageLinkForm.css'
class ImageLinkForm extends Component {
  
 
  render() {
    let { inputOnChange, onDetectButtonSubmit } = this.props;
    return (
      <div className="centerFlex f2 w-70 pa3 ml-auto mr-auto shadow-1">
        <p>This app will detect faces in a picture</p>
        <small>paste in an ImageURL & Give it a try!</small>
        <div className="form centerFlex flex-row pa5">
          <input
            className="pa3 w-80 ma0 outline-0"
            type="text"
            placeholder="https://th.bing.com/th/id/R.a5413b9c7420fcdff16048a4a0378520?rik=FtNiOBu4OyI9Bg&pid=ImgRaw&r=0"
            onChange={inputOnChange}
          />
          <button
            className="grow w-20 pa3 blue bg-light-pink pointer outline-0"
            onClick={onDetectButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    );
  }
}

export default ImageLinkForm;
