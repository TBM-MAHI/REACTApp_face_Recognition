import React, { Component } from "react";

class Navigation extends Component {
  render() {
    let { onRouteChange } = this.props;
    return (
      <nav>
        <p
          className="tr f2 dark-blue link dim pointer pa3 ma0"
          onClick={() => onRouteChange("signin")}
        >
          Sign out
        </p>
      </nav>
    );
  }
}

export default Navigation;
