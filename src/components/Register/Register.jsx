import React, { Component } from 'react';

class Register extends Component {
    render() {
         let { onRouteChange } = this.props;
        return (
          <div>
            <div>
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
                      />
                    </div>
                    <div className="mv3">
                      <label className="db fw6 lh-copy f3" htmlFor="password">
                        Password
                      </label>
                      <input
                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 outline-0"
                        type="password"
                        name="password"
                        id="password"
                      />
                    </div>
                  </fieldset>
                  <div className="center">
                    <input
                      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib"
                      type="submit"
                      value="Register"
                      onClick={() => onRouteChange("signin")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Register;