import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import './signin.css'
class Signin extends Component {
  constructor() {
    super();
    this.state = {
      emailVal: "",
      passVal: "",
      visibility: false,
      err: {
        ename: "",
        exists: false,
      },
    };
  }

  onEmailChange = (event) => {
    this.setState(() => {
      return { emailVal: event.target.value };
    });
  };
  onPassChange = (event) => {
    this.setState(() => {
      return { passVal: event.target.value };
    });
  };
  onSigninSubmit = async () => {
    console.log("submitted value ", this.state);
    try {
      let response = await fetch(
        "https://facerecognition-api-backend.onrender.com/signin",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: this.state.emailVal,
            password: this.state.passVal,
          }),
        }
      );

      let result = await response.json();
      let { message,data } = result;
      if (response.status === 200) {
        console.log(message)
        console.log(data)
        this.props.loadUsers(data);
        this.props.onRouteChange("home");
      } else if (response.status === 400) {
        console.log(message);
        this.setState(() =>
          Object.assign(this.state.err, { ename: message, exists: true })
        );
      }
    } catch (error) {
      this.setState(() =>
        Object.assign(this.state.err, { ename: `Internal Server Err!`, exists: true })
      );
    }
  };
  togglePassVisibility = () => {
    let tf = this.state.visibility ? false : true;
    this.setState(() =>
      Object.assign(this.state, { visibility: tf }, () =>
        console.log(this.state.visibility)
      )
    );
  };

  render() {
    console.log("render signin");
    return (
      <div className="pa4 black br3 ba bs--solid w-30 center mv7 shadow-4">
        {/* borderaround bordersolid */}
        <div className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f4" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="no"
                onChange={this.onEmailChange}
              />
            </div>
            <div className="mv3 visibility">
              <label className="db fw6 lh-copy f4" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type={this.state.visibility ? "text" : "password"}
                name="password"
                id="password"
                autoComplete="no"
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
            <label className="pa0 ma0 lh-copy f4 pointer">
              <input type="checkbox" /> Remember me
            </label>
          </fieldset>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib"
              type="submit"
              value="Sign in"
              onClick={this.onSigninSubmit}
            />
          </div>
          <div className="lh-copy mt3">
            No Account? Register
            <a
              href="#0"
              className="f4 link dim black"
              onClick={() => this.props.onRouteChange("register")}
            >
              Here
            </a>
          </div>
          <div className="f3 fw7 mt3 red">
            {this.state.err.exists ? this.state.err.ename + "Try Again." : ""}
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
