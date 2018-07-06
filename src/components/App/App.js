import React from 'react';
import Form from '../Form/form.js';
import { getStashpoints } from '../utils/getStashpoints.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stashPoints: '',
      city: '',
      hotel: false,
      tourist_information_centre: false
    };
  }

  /**
   * Form submission
   * Makes the API call and updates App state with the response from the API call
   */
  handleSubmit = event => {
    event.preventDefault();
    getStashpoints(this.state).then(data => {
      this.setState({
        stashPoints: data,
        city: '',
        hotel: false,
        tourist_information_centre: false
      });
    });
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
