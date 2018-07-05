import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stashPoints: []
    };
  }

  render() {
    return (
      <div>
        <h1>StashPoint Search</h1>
      </div>
    );
  }
}
