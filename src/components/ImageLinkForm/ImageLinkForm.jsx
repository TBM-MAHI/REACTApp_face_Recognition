import React, { Component } from "react";
import './imageLinkForm.css'
class ImageLinkForm extends Component {
  render() {
    return (
      <div className="centerFlex f2 w-70 pa3 ml-auto mr-auto shadow-1">
        <p>This will detect faces in a picture. GIVE IT A TRY1</p>
        <div className="form centerFlex flex-row pa5">
          <input className="pa3 w-80 ma0 outline-0" type="text" />
          <button className="grow w-20 pa3 blue bg-light-pink pointer outline-0">
            Detect
          </button>
        </div>
      </div>
    );
  }
}

export default ImageLinkForm;
