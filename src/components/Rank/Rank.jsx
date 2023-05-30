import React, { Component } from 'react';

class Rank extends Component {
    render() {
         console.log("render Rank");
        let { name,rank } = this.props;
        return (
          <div className="centerFlex">
            <div className="white f3 mt5">{`${name} Your rank is now`}</div>
            <div className="white f1">{`${rank}`}</div>
          </div>  
        );
    }
}

export default Rank;