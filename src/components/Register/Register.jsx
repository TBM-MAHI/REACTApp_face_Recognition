import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "../Signin/signin.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      emailVal: "",
      passVal: "",
      nameVal: "",
      visibility: false,
      err: {
        errmessage: "",
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
  onRegisterSubmit = () => {
    console.log(this.state);
    fetch("https://facerecognition-api-backend.onrender.com/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.emailVal,
        name: this.state.nameVal,
        password: this.state.passVal,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.name) {
          //this.props.loadUsers(result);
          console.log(result);
          this.props.onRouteChange("signin");
        }

        console.log(result.message);
        this.setState(() => {
          return {
            err: {
              errmessage: result.message,
              exists: true,
            },
          };
        });
      });
  };
  render() {
    console.log("render register");
    return (
      <div className="pa4 black br3 ba bs--solid w-30 center mv7 shadow-4">
        <div className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f3" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 outline-0"
                type="email"
                name="email-address"
                id="email-address"
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
            {this.state.err.exists
              ? this.state.err.errmessage + "Try Again."
              : ""}
          </div>
        </div>
      </div>
    );
  }
}

export default Register;