import React, { Component } from 'react';
import './App.css'

import Navigation from './components/Navigation/Navigation.jsx';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceDetection/FaceDetection.jsx'
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navigation />
        <Logo />
        
        <ImageLinkForm/>
        <FaceRecognition/>
      </div>
    ); 
  }
}

export default App;