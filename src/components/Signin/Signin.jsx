import React, { Component } from "react";

class Signin extends Component {
    render() {
        let { onRouteChange } = this.props;
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
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f4" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
              />
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
              onClick={() => onRouteChange("home")}
            />
          </div>
          <div className="lh-copy mt3">
            No Account? Register
            <a
              href="#0"
              className="f3 link dim black db"
              onClick={() => onRouteChange("register")}
            >
              Here
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
