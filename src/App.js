import './App.css'
import ParticlesComponent from "./components/Particles/Particle.jsx";
import Navigation from './components/Navigation/Navigation.jsx';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceDetection from "./components/FaceDetection/FaceDetection.jsx";

 const App = ()=>{
     

   return (
     <div>
       <ParticlesComponent />
       <Navigation />
       <Logo />
       <Rank />
       <ImageLinkForm />
       {/*   <FaceDetection /> */}
     </div>
   ); 
  
}

export default App;