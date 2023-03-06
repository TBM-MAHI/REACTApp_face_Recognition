import React, { Component } from 'react';

class Rank extends Component {
    render() {
        return (
          <div className="centerFlex">
                <div className="white f3 mt5">
                    {`Your rank is now`}
                </div>
            <div className="white f1">{`5`}</div>
          </div>
        );
    }
}

export default Rank;