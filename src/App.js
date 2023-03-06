import React from "react";
import Clarifai from "clarifai";
import "./App.css";
import ParticlesComponent from "./components/Particles/Particle.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceDetection from "./components/FaceDetection/FaceDetection.jsx";

//You must add your own API key here from Clarifai.
/* const app = new Clarifai.App({
  apiKey: "92331e4146b64875b0305cf274128265",
});
 */
class App extends React.Component {
  constructor() {
    super()
    this.state={
      input: '',
  }
}
  
  inputOnChange = (event) => {
    console.log(event.target.value);
  }
  
  onButtonSubmit = () => {
    console.log('clicked'); 
     
}
render() {
    return (
      <div>
        <ParticlesComponent />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          inputOnChange={this.inputOnChange}
          onButtonSubmit={this.onButtonSubmit}
        />
          <FaceDetection />
      </div>
    );
  }
}

export default App;
