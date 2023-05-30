import React from "react";
import "./App.css";
import ParticlesComponent from "./components/Particles/Particle.jsx";

import Register from "./components/Register/Register";
import Signin from "./components/Signin/Signin";
import Navigation from "./components/Navigation/Navigation.jsx";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceDetection from "./components/FaceDetection/FaceDetection.jsx";

let initialState = {
  input: "",
  imageURL: "",
  boxes: {},
  route: "signin",
  user: {
    id: "",
    name: "",
    username: "",
    email: "",
    password: "",
    entries: 0,
    joined: "",
  },
};

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }
  /*   componentDidMount() {
    fetch('http://localhost:3001')
      .then(response => response.json())
      .then(result => console.log(result))
  } */
  loadUsers = (data) => {
    this.setState(
      () => {
        return {
          user: {
            id: data.id,
            name: data.name,
            email: data.email,
            entries: Number(data.entries),
            joined: data.joined,
          },
        };
      },
      () => console.log(this.state.user)
    );
  };
  calculateFaceLocation = (regions) => {
    console.log(regions);
    let imgBoxes = {};
    let imgInput = document.getElementById("inputImg");
    let imgHeight = Number(imgInput.height);
    let imgWidth = Number(imgInput.width);
    console.log("height ", imgHeight,"width", imgWidth);
    regions.forEach((r, index) => {
      imgBoxes[`imgbox${index}`] = {
        leftCol: r.region_info.bounding_box.left_col * imgWidth,
        rightCol: imgWidth - r.region_info.bounding_box.right_col * imgWidth,
        topRow: r.region_info.bounding_box.top_row * imgHeight,
        bottomRow:
          imgHeight - r.region_info.bounding_box.bottom_row * imgHeight,
      };
    });
    return imgBoxes;
  };
  faceBoxes = (imgBoxes) => {
    this.setState(() => {return { boxes: imgBoxes } },
      () => {
        // console.log(this.state.boxes);
      }
    );
  };

  inputOnChange = (event) => {
    this.setState(() => {
      return { input: event.target.value };
    });
  };

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState(initialState);
    } else {
      this.setState(() => {
        return { route: route };
      });
    }
  };

  onDetectButtonSubmit = () => {
    let IMG_URL = this.state.input;
    this.setState(Object.assign(this.state, { imageURL :this.state.input}));
    
    fetch("https://facerecognition-api-backend.onrender.com/imageAPIcall", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        imgURL: IMG_URL,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        /* console.log(result);
        console.log(result.outputs[0].data.regions); */
        this.faceBoxes(
          this.calculateFaceLocation(result.outputs[0].data.regions)
        );
        fetch("https://facerecognition-api-backend.onrender.com/image", {
          method: "put",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: this.state.user.id }),
        })
          .then((res) => res.json())
          .then((count) => {
           // console.log(count[0]);
            this.setState(() => Object.assign(this.state.user, count[0]));
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => console.log("clarifai API Failed", error));
  };

  render() {
    let { onRouteChange, inputOnChange, onDetectButtonSubmit, loadUsers } =
      this;
    console.log("app render");
    return (
      <div>
        <ParticlesComponent />
        {this.state.route === "signin" ? (
          <Signin onRouteChange={onRouteChange} loadUsers={loadUsers} />
        ) : this.state.route === "register" ? (
          <Register onRouteChange={onRouteChange} loadUsers={loadUsers} />
        ) : (
          <div>
            <Navigation onRouteChange={onRouteChange} />
            <Logo />
            <Rank name={this.state.user.name} rank={this.state.user.entries} />
            <ImageLinkForm
              inputOnChange={inputOnChange}
              onDetectButtonSubmit={onDetectButtonSubmit}
            />
            <FaceDetection
              imageURL={this.state.imageURL}
              boxes={this.state.boxes}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
