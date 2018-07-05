import React from 'react';
import Form from '../Form/form.js';

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
        <Form />
      </div>
    );
  }
}
