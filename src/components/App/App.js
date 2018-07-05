import React from 'react';
import Form from '../Form/form.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stashPoints: [],
      city: '',
      hotel: false,
      tourist_information_centre: false,
      queryParams: {}
    };
  }

  /**
   * Form submission
   * Makes the API call and updates App state with the response from the API call
   */
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  /**
   * Form input value changes
   * Updates the fields in the form i.e. unchecked checkbox becomes checked on click
   */
  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [event.target.id]: value
    });
  };

  render() {
    return (
      <div>
        <h1>StashPoint Search</h1>
        <Form
          values={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}
