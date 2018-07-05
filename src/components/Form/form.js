import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ''
    };
  }

  // Updates the state in the form which is used for the form input values
  // Ensures that the user can see what they are typing
  handleChange = event => {
    const cityVal = event.target.value;
    this.setState({
      city: cityVal
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.city);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="city">City </label>
        <input
          id="city"
          placeholder="Enter a city"
          value={this.state.city}
          type="text"
          onChange={this.handleChange}
          Required
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}
