import React from 'react';
import Form from '../Form/form.js';
import { getStashpoints } from '../utils/getStashpoints.js';
import Card from '../Card/card.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stashPoints: '',
      city: '',
      hotel: false,
      tourist_information_centre: false,
      formSubmitted: false
    };
  }

  /**
   * Form submission
   * Makes the API call and updates App state with the response from the API call
   */
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ formSubmitted: true });
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
    const { stashPoints, formSubmitted } = this.state;
    return (
      <div>
        <h1>StashPoint Search</h1>
        {!formSubmitted ? (
          <Form
            values={this.state}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        ) : Array.isArray(stashPoints) ? (
          stashPoints.length > 0 ? (
            <Card stashPoints={stashPoints} />
          ) : (
            <p>Sorry no results</p>
          )
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}
