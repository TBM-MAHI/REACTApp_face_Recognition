import React from "react";
import Clarifai from "clarifai";
import "./App.css";
import ParticlesComponent from "./components/Particles/Particle.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceDetection from "./components/FaceDetection/FaceDetection.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageURL: "",
      boxes: {},
    };
  }

  calculateFaceLocation = (regions) => {
    let imgBoxes = {};
    let imgInput = document.getElementById("inputImg");
    let imgHeight = Number(imgInput.height);
    let imgWidth = Number(imgInput.width);
    console.log("height ",imgHeight, imgWidth);
    regions.map((r, index) => {
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
    this.setState(() => {
      return { boxes : imgBoxes};
    }, () => {
     // console.log(this.state.boxes);
    })
  };

  inputOnChange = (event) => {
    this.setState(() => {
      return { input: event.target.value };
    });
  };

  onButtonSubmit = () => {
    console.log("loading...");
  const IMAGE_URL = this.state.input;
    // const IMAGE_URL = "https://th.bing.com/th/id/OIP.vIQr_keH9CObzE7niK_lcgHaEo?pid=ImgDet&rs=1";
    // const IMAGE_URL = "https://c.stocksy.com/a/wyk500/z9/1372242.jpg";
    const PAT = "a8161d6bdac44d71ad7d8fb71d58de8c";
    const MODEL_ID = "face-detection";
    const MODEL_VERSION_ID = "6dc7e46bc9124c5c8824be4822abe105";
    this.setState(
      () => {
        return { imageURL: IMAGE_URL };
      },
      () => {
        console.log("set state" + this.state.imageURL);
      }
    );
    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////
    const raw = JSON.stringify({
      user_app_id: {
        user_id: "mahi89",
        app_id: "Face_detect",
      },
      inputs: [
        {
          data: {
            image: {
              url: IMAGE_URL,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
      body: raw,
    };

    // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
    // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
    // this will default to the latest version_id

    fetch(
      "https://api.clarifai.com/v2/models/" +
        MODEL_ID +
        "/versions/" +
        MODEL_VERSION_ID +
        "/outputs",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        //console.log(result.outputs[ 0 ].data.regions);
        this.faceBoxes(
          this.calculateFaceLocation(result.outputs[0].data.regions)
        );
      })
      .catch((error) => console.log("error", error));
  };
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
        <FaceDetection imageURL={this.state.imageURL} boxes={this.state.boxes} />
      </div>
    );
  }
}

export default App;
