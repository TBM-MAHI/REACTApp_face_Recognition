import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "../Signin/signin.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      loading:null,
      emailVal: "",
      passVal: "",
      nameVal: "",
      visibility: false,
      err: {
        errormessage: "",
        exists: false,
      },
    };
  }

  onEmailChange = (event) => {
    this.setState(() => {
      return { emailVal: event.target.value };
    });
  };
  onNameChange = (event) => {
    this.setState(() => {
      return { nameVal: event.target.value };
    });
  };
  onPassChange = (event) => {
    this.setState(() => {
      return { passVal: event.target.value };
    });
  };
  //password visibility
  togglePassVisibility = () => {
    let isVisible = this.state.visibility ? false : true;
    this.setState(() =>
      Object.assign(this.state, { visibility: isVisible }, () =>
        console.log(this.state.visibility)
      )
    );
  };
  onRegisterSubmit = async () => {
    console.log(this.state);
    this.setState(() => {
      return { loading: "loading...please wait" };
    })
    let response = await fetch(
      "https://facerecognition-api-backend.onrender.com/register",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.state.emailVal,
          name: this.state.nameVal,
          password: this.state.passVal,
        }),
      }
    );
    let result = await response.json();
    let { message, data } = result;
    
    if (response.status === 201) {
      this.setState(() => {
        return { loading: null };
      });
      console.log(message); 
      alert("registration success!. Click OK to continue");
      this.props.onRouteChange("signin");
    } else if (response.status === 400) {
      this.setState(() => {
        return { loading: null };
      });
      this.setState(() =>
        Object.assign(this.state.err, { errormessage: message, exists: true })
      );
    }
  };
  render() {
    console.log("render register");
    return (
      <div className="pa4 black br3 ba bs--solid w-30 center mv7 shadow-4">
        <div className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f3" htmlFor="email">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 outline-0"
                type="email"
                name="email"
                id="email"
                onChange={this.onEmailChange}
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f3" htmlFor="name">
                Name
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 outline-0"
                type="text"
                name="user-name"
                onChange={this.onNameChange}
                autoComplete='none'
              />
            </div>
            <div className="mv3 visibility">
              <label className="db fw6 lh-copy f3" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 outline-0"
                type={this.state.visibility ? "text" : "password"}
                name="password"
                id="password"
                autoComplete="off"
                onChange={this.onPassChange}
              />
              <i>
                {" "}
                <FontAwesomeIcon
                  icon={faEye}
                  onClick={this.togglePassVisibility}
                />
              </i>
            </div>
          </fieldset>
          <div className="center">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib"
              type="submit"
              value="Register"
              onClick={this.onRegisterSubmit}
            />
          </div>
          <div className="f3 fw7 mt3 red">
            {this.state.err.exists ? this.state.err.errormessage : ""}
            {this.state.loading ? this.state.loading : ""}
          </div>
        </div>
      </div>
    );
  }
}

export default Register;